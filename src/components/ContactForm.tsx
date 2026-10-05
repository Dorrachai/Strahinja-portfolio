import React, { useState, useEffect } from "react";
import { site } from "@/data/site";
import {
  saveInquiryBackup,
  updateInquiryStatus,
} from "@/lib/inquiryBackup";
import { InquiryLedgerModal } from "@/components/InquiryLedgerModal";
import {
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Mail,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sentDirectly, setSentDirectly] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showLedgerModal, setShowLedgerModal] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#inquiries" || window.location.hash === "#ledger") {
        setShowLedgerModal(true);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (
        e.shiftKey &&
        (e.key === "L" || e.key === "l") &&
        activeTag !== "input" &&
        activeTag !== "textarea"
      ) {
        setShowLedgerModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const targetEmail = site.email || "strahinja.velickovic018@gmail.com";
  const emailSubject = `[Game Audio Inquiry] ${name || "New Client"}`;
  const emailBody = `Hello Strahinja,\n\nMy name is ${name} (${email}).\n\nProject details:\n${message}\n\n---\nSent from ${site.name} portfolio`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    targetEmail
  )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const outlookComposeUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    targetEmail
  )}&subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const outlookDirectUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
    targetEmail
  )}&subject=${encodeURIComponent("[Game Audio Inquiry] New Project")}`;

  const handleOpenOutlook = () => {
    // Also trigger desktop mail client (Outlook Desktop) via invisible iframe
    try {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = `mailto:${targetEmail}?subject=${encodeURIComponent(
        emailSubject || "[Game Audio Inquiry] New Project"
      )}`;
      document.body.appendChild(iframe);
      setTimeout(() => iframe.remove(), 2500);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    // 1. Immediate local backup in browser storage so message is NEVER lost
    const localRecord = saveInquiryBackup({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      status: "attempted",
    });

    let successfullyDelivered = false;

    // 2. Primary Tier: Web3Forms (if access key is provided)
    const web3formsKey = (site as { web3formsKey?: string }).web3formsKey;
    if (web3formsKey && web3formsKey.trim() !== "") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey.trim(),
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: emailSubject,
            from_name: `${name.trim()} (Portfolio)`,
          }),
        });

        const data = await response.json().catch(() => null);
        if (response.ok && data?.success) {
          successfullyDelivered = true;
          updateInquiryStatus(localRecord.id, "synced", {
            endpointUsed: "Web3Forms",
          });
          setIsSubmitting(false);
          setSentDirectly(true);
          setIsSubmitted(true);
          return;
        }
      } catch (err) {
        console.warn("Web3Forms submission failed, trying FormSubmit:", err);
      }
    }

    // 3. Main Tier: FormSubmit.co (100% Free & Unlimited, instant AJAX)
    const formSubmitEndpoint =
      site.formEndpoint && site.formEndpoint.includes("formsubmit.co")
        ? site.formEndpoint
        : `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

    if (!successfullyDelivered) {
      try {
        const response = await fetch(formSubmitEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _subject: emailSubject,
            _captcha: "false",
            _template: "table",
          }),
        });

        const data = await response.json().catch(() => null);
        if (
          response.ok &&
          (data?.success === "true" ||
            data?.success === true ||
            (data?.message && data.message.includes("Activation")))
        ) {
          successfullyDelivered = true;
          updateInquiryStatus(localRecord.id, "synced", {
            endpointUsed: "FormSubmit.co",
          });
          setIsSubmitting(false);
          setSentDirectly(true);
          setIsSubmitted(true);
          return;
        }
      } catch (err) {
        console.warn("FormSubmit submission failed, checking fallback:", err);
      }
    }

    // 4. Secondary Tier: Optional Fallback Endpoint (if configured in site.ts)
    const fallbackEndpoint = (site as { formFallbackEndpoint?: string }).formFallbackEndpoint;
    if (!successfullyDelivered && fallbackEndpoint && fallbackEndpoint.trim() !== "") {
      try {
        const isGoogle = fallbackEndpoint.includes("script.google.com");
        const res = await fetch(fallbackEndpoint, {
          method: "POST",
          headers: isGoogle
            ? { "Content-Type": "text/plain;charset=utf-8" }
            : {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _subject: emailSubject,
          }),
        });

        if (res.ok) {
          successfullyDelivered = true;
          updateInquiryStatus(localRecord.id, "synced", {
            endpointUsed: fallbackEndpoint,
          });
          setIsSubmitting(false);
          setSentDirectly(true);
          setIsSubmitted(true);
          return;
        }
      } catch (err) {
        console.warn("Secondary fallback endpoint failed:", err);
      }
    }

    // 4. Offline/Blocker Fallback: Update backup status & display comprehensive mail options
    updateInquiryStatus(localRecord.id, "backup_fallback", {
      error: "Cloud submission blocked or network unreachable",
    });

    setIsSubmitting(false);
    setSentDirectly(false);
    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${targetEmail}\nSubject: ${emailSubject}\n\nHello Strahinja,\n\nMy name is ${name} (${email}).\n\nProject details:\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
    setSentDirectly(false);
  };

  if (isSubmitted) {
    return (
      <>
        <div className="rounded-2xl border border-earth-orange/40 bg-card/95 p-8 sm:p-10 text-center space-y-6 animate-fade-in shadow-xl backdrop-blur-sm">
          <div
            className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${
              sentDirectly
                ? "bg-earth-orange/15 border border-earth-orange/50 text-earth-orange"
                : "bg-amber-500/15 border border-amber-500/50 text-amber-500"
            }`}
          >
            {sentDirectly ? <CheckCircle2 size={30} /> : <AlertTriangle size={30} />}
          </div>

          <div className="space-y-2">
            <h4 className="font-display text-2xl font-bold text-foreground">
              {sentDirectly ? `Thank you, ${name}!` : "Message Saved & Ready to Send!"}
            </h4>

            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              {sentDirectly ? (
                <>
                  Your inquiry has been delivered directly to{" "}
                  <span className="text-foreground font-semibold">{targetEmail}</span>. I will get back to you promptly!
                </>
              ) : (
                <>
                  Your message has been safely saved. An adblocker or connection issue paused background delivery, so you can deliver your message directly using one of the quick options below:
                </>
              )}
            </p>
          </div>

          {/* Action options */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 pt-2">
            {!sentDirectly && (
              <>
                <a
                  href={outlookComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleOpenOutlook}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold btn-gradient-amber shadow-md"
                >
                  <Mail size={14} />
                  <span>Send via Outlook</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-separator text-xs uppercase tracking-wider font-semibold text-foreground hover:bg-secondary hover:border-earth-orange/40 transition-all"
                >
                  <span>Gmail</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={mailtoUrl}
                  onClick={handleOpenOutlook}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-separator text-xs uppercase tracking-wider font-semibold text-foreground hover:bg-secondary hover:border-earth-orange/40 transition-all"
                >
                  <Send size={14} />
                  <span>Default Mail App</span>
                </a>
              </>
            )}

            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-separator text-xs uppercase tracking-wider font-semibold text-foreground hover:bg-secondary hover:border-earth-orange/40 transition-all"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-earth-orange" />
                  <span>Copy details</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider ${
                sentDirectly ? "btn-gradient-amber" : "border border-separator text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>Send another</span>
            </button>
          </div>

          {/* Fallback reassurance footnote */}
          <div className="pt-4 border-t border-separator/60 flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
            <ShieldCheck size={13} className="text-earth-orange" />
            <span>Your message details are saved so nothing is lost.</span>
          </div>
        </div>

        <InquiryLedgerModal open={showLedgerModal} onOpenChange={setShowLedgerModal} />
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-separator/80 bg-gradient-to-br from-card/95 via-card/85 to-secondary/35 p-6 sm:p-8 shadow-xl backdrop-blur-sm"
      >
        <div className="flex items-center pb-1">
          <span className="text-xs uppercase tracking-widest font-mono text-earth-orange font-semibold flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Project Inquiry Form</span>
          </span>
        </div>

        {/* Name & Email Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block"
            >
              Name <span className="text-earth-orange">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your name or studio"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-separator bg-background/80 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-earth-orange focus:ring-1 focus:ring-earth-orange transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block"
            >
              Email <span className="text-earth-orange">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-separator bg-background/80 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-earth-orange focus:ring-1 focus:ring-earth-orange transition-all"
            />
          </div>
        </div>

        {/* Message textarea */}
        <div className="space-y-1.5">
          <label
            htmlFor="contact-message"
            className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block"
          >
            Message <span className="text-earth-orange">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            placeholder="Tell me about your project, target platforms, timeline, or audio vision..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-separator bg-background/80 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-earth-orange focus:ring-1 focus:ring-earth-orange transition-all resize-none"
          />
        </div>

        {/* Submit Button & direct mail hint */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-wider btn-gradient-amber disabled:opacity-50"
          >
            <Send size={14} className={isSubmitting ? "animate-pulse" : ""} />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>

          <a
            href={outlookDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenOutlook}
            className="text-xs text-muted-foreground hover:text-earth-orange transition-colors font-mono inline-flex items-center gap-1.5 group"
            title="Open Outlook with Strahinja's email pre-filled"
          >
            <Mail size={13} className="text-earth-orange group-hover:scale-110 transition-transform" />
            <span>or email via Outlook:</span>
            <span className="underline">{targetEmail}</span>
          </a>
        </div>
      </form>

      <InquiryLedgerModal open={showLedgerModal} onOpenChange={setShowLedgerModal} />
    </>
  );
}
