// Use environment variable for the Google Apps Script Web App URL
const API_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export interface GuestbookEntry {
  timestamp: string;
  nama: string;
  kehadiran: string;
  jumlah_orang: number;
  ucapan: string;
}

export async function submitRSVP(data: {
  nama: string;
  kehadiran: string;
  jumlah_orang?: number;
  ucapan: string;
}) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getGuestbookEntries(): Promise<GuestbookEntry[]> {
  try {
    const response = await fetch(API_URL, {
      cache: 'no-store'
    });
    const result = await response.json();
    if (result.status === "success") {
      return result.data;
    }
    return [];
  } catch (error) {
    // Silently handle error in client to prevent Next.js Unhandled Error Overlay in dev
    return [];
  }
}

