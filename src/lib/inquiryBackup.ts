export interface StoredInquiry {
  id: string;
  timestamp: string;
  formattedDate: string;
  name: string;
  email: string;
  message: string;
  status: "synced" | "backup_fallback" | "attempted";
  endpointUsed?: string;
  error?: string;
}

const STORAGE_KEY = "strahinja_portfolio_inquiries";

/**
 * Retrieve all locally saved inquiry records from localStorage.
 */
export function getStoredInquiries(): StoredInquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("Failed to read inquiries from localStorage:", e);
    return [];
  }
}

/**
 * Save a newly submitted inquiry to localStorage as an immediate local backup.
 */
export function saveInquiryBackup(
  inquiry: Omit<StoredInquiry, "id" | "timestamp" | "formattedDate">
): StoredInquiry {
  const list = getStoredInquiries();
  const now = new Date();
  const newInquiry: StoredInquiry = {
    ...inquiry,
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: now.toISOString(),
    formattedDate: now.toLocaleString(),
  };

  try {
    const updated = [newInquiry, ...list].slice(0, 50); // Store up to 50 recent inquiries
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to save inquiry to localStorage:", e);
  }

  return newInquiry;
}

/**
 * Update the delivery status of a locally stored inquiry (e.g., when cloud sync succeeds).
 */
export function updateInquiryStatus(
  id: string,
  status: StoredInquiry["status"],
  details?: { endpointUsed?: string; error?: string }
) {
  try {
    const list = getStoredInquiries();
    const updated = list.map((item) =>
      item.id === id
        ? {
            ...item,
            status,
            ...(details?.endpointUsed ? { endpointUsed: details.endpointUsed } : {}),
            ...(details?.error ? { error: details.error } : {}),
          }
        : item
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to update inquiry status in localStorage:", e);
  }
}

/**
 * Clear all locally stored inquiries.
 */
export function clearStoredInquiries() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear inquiries from localStorage:", e);
  }
}
