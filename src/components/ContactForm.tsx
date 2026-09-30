import React, { useState } from "react";
import { site } from "@/data/site";
import { Send, CheckCircle2, Copy, Check, Sparkles } from "lucide-react";

const TOPIC_OPTIONS = [
  "Game Sound Design",
  "Audio Implementation (Wwise / FMOD)",
  "Foley & Custom SFX",
  "Adaptive Music",
  "General Inquiry",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPIC_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const targetEmail = site.email || "strahinjavelickovic00@gmail.com";
    const subject = encodeURIComponent(`[Game Audio Inquiry] ${topic} — ${name}`);
    const body = encodeURIComponent(
      `Hello Strahinja,\n\nMy name is ${name} (${email}).\n\nI'm reaching out regarding: ${topic}\n\nProject details:\n${message}\n\n---\nSent from ${site.name} portfolio`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    // Small delay for smooth button feedback
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${site.email || "strahinjavelickovic00@gmail.com"}\nSubject: [Game Audio Inquiry] ${topic} — ${name}\n\nHello Strahinja,\n\nMy name is ${name} (${email}).\nI'm reaching out regarding: ${topic}\n\nProject details:\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-earth-orange/40 bg-card/90 p-8 sm:p-10 text-center space-y-6 animate-fade-in shadow-xl">
        <div className="mx-auto w-14 h-14 rounded-full bg-earth-orange/15 border border-earth-orange/50 flex items-center justify-center text-earth-orange">
          <CheckCircle2 size={30} />
        </div>

        <div className="space-y-2">
          <h4 className="font-display text-2xl font-bold text-foreground">
            Thank you, {name}!
          </h4>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Your message draft has been prepared for <span className="text-foreground font-medium">{site.email || "strahinjavelickovic00@gmail.com"}</span>.
            If your email app didn't open automatically, you can copy the text below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
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
                <span>Copy draft to clipboard</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-earth-orange text-white text-xs uppercase tracking-wider font-semibold hover:bg-earth-orange-light shadow-md transition-all"
          >
            <span>Send another message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-separator/80 bg-card/70 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between pb-1">
        <span className="text-xs uppercase tracking-widest font-mono text-earth-orange font-semibold flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>Project Inquiry Form</span>
        </span>
        <span className="text-[11px] font-mono text-muted-foreground/70 hidden sm:inline">
          Response within 24-48h
        </span>
      </div>

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block">
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
          <label htmlFor="contact-email" className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block">
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

      {/* Topic selection pills */}
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block">
          Audio Needs
        </label>
        <div className="flex flex-wrap gap-2">
          {TOPIC_OPTIONS.map((item) => {
            const isSelected = topic === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setTopic(item)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  isSelected
                    ? "bg-earth-orange/15 border-earth-orange text-earth-orange shadow-sm font-semibold"
                    : "bg-background/60 border-separator/80 text-muted-foreground hover:text-foreground hover:border-separator"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message textarea */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-xs uppercase tracking-wider font-semibold text-foreground/80 block">
          Message <span className="text-earth-orange">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
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
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-earth-orange text-white text-xs uppercase tracking-wider font-semibold hover:bg-earth-orange-light shadow-md hover:shadow-lg transition-all disabled:opacity-50"
        >
          <Send size={14} className={isSubmitting ? "animate-pulse" : ""} />
          <span>{isSubmitting ? "Preparing..." : "Send Message"}</span>
        </button>

        <a
          href={`mailto:${site.email || "strahinjavelickovic00@gmail.com"}`}
          className="text-xs text-muted-foreground hover:text-earth-orange transition-colors font-mono"
        >
          or direct email: <span className="underline">{site.email || "strahinjavelickovic00@gmail.com"}</span>
        </a>
      </div>
    </form>
  );
}
