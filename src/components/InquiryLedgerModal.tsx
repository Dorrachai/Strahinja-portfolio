import React, { useState, useEffect } from "react";
import { site } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  getStoredInquiries,
  clearStoredInquiries,
  StoredInquiry,
} from "@/lib/inquiryBackup";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Download,
  Copy,
  Check,
  Clock,
  FileSpreadsheet,
  Mail,
} from "lucide-react";

interface InquiryLedgerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InquiryLedgerModal({ open, onOpenChange }: InquiryLedgerModalProps) {
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setInquiries(getStoredInquiries());
    }
  }, [open]);

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the locally cached inquiries on this browser?")) {
      clearStoredInquiries();
      setInquiries([]);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inquiries, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `portfolio_inquiries_backup_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyInquiry = (inquiry: StoredInquiry) => {
    const text = `Date: ${inquiry.formattedDate}\nFrom: ${inquiry.name} <${inquiry.email}>\nStatus: ${inquiry.status}\n\nMessage:\n${inquiry.message}`;
    navigator.clipboard.writeText(text);
    setCopiedId(inquiry.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sheetsUrl = (site as { sheetsUrl?: string }).sheetsUrl || "https://sheets.google.com/";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-separator text-foreground p-6 sm:p-8">
        <DialogHeader className="space-y-2 pb-2">
          <div className="flex items-center gap-2 text-earth-orange">
            <ShieldCheck size={22} />
            <DialogTitle className="text-xl sm:text-2xl font-display font-bold">
              Inquiries Ledger & Fallback Storage
            </DialogTitle>
          </div>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            All inquiries sent through the portfolio are permanently stored in your Google Sheets cloud database, and also cached locally on this device as a fallback.
          </DialogDescription>
        </DialogHeader>

        {/* Cloud Ledger Banner */}
        <div className="rounded-xl border border-earth-orange/40 bg-earth-orange/10 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={18} className="text-earth-orange" />
              <span className="font-semibold text-sm text-foreground">
                Primary Cloud Ledger (Google Sheets)
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              Every message is logged automatically to your <strong className="text-foreground">"Portfolio Inquiries"</strong> Google Sheet before email forwarding.
            </p>
          </div>

          <a
            href={sheetsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold btn-gradient-amber whitespace-nowrap"
          >
            <span>Open Google Sheets</span>
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Local Backup Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-muted-foreground" />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Device Local Vault ({inquiries.length})
              </h4>
            </div>

            {inquiries.length > 0 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleExport}
                  title="Export records as JSON"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-separator text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                >
                  <Download size={13} />
                  <span>Export</span>
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  title="Clear local device cache"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-separator text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              </div>
            )}
          </div>

          {inquiries.length === 0 ? (
            <div className="rounded-xl border border-separator/60 bg-secondary/30 p-8 text-center space-y-2">
              <Mail size={28} className="mx-auto text-muted-foreground/60" />
              <p className="text-sm font-medium text-foreground">No local inquiries cached on this device</p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Submissions made from this browser will appear here. Remember to check your Google Sheet for all visitor messages across the web!
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-xl border border-separator/80 bg-secondary/20 hover:border-earth-orange/40 transition-all space-y-2 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-semibold text-sm text-foreground">
                        {inq.name}
                      </span>{" "}
                      <span className="text-xs text-muted-foreground font-mono">
                        &lt;{inq.email}&gt;
                      </span>
                      <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                        {inq.formattedDate}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider ${
                          inq.status === "synced"
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {inq.status === "synced" ? (
                          <>
                            <CheckCircle2 size={10} />
                            <span>Synced</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle size={10} />
                            <span>Local Draft</span>
                          </>
                        )}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleCopyInquiry(inq)}
                        className="p-1.5 rounded-lg border border-separator text-muted-foreground hover:text-foreground hover:border-earth-orange/40 transition-colors"
                        title="Copy inquiry details"
                      >
                        {copiedId === inq.id ? (
                          <Check size={13} className="text-emerald-400" />
                        ) : (
                          <Copy size={13} />
                        )}
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-foreground/90 whitespace-pre-wrap bg-background/60 p-2.5 rounded-lg border border-separator/40 font-sans">
                    {inq.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
