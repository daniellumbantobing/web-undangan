// Google Apps Script for Wedding Invitation
// Paste this code into Extensions > Apps Script in your Google Sheets
// Save, then click "Deploy" > "New deployment"
// Select "Web app"
// Execute as: "Me"
// Who has access: "Anyone"
// Copy the resulting Web App URL and use it in your Next.js app's environment variables.

const SHEET_NAME = "Sheet1";
const HEADERS = ["Timestamp", "Nama", "Kehadiran", "Jumlah_Orang", "Ucapan"];

// Fungsi ini akan otomatis menyiapkan Sheet dan Judul Kolom (Header)
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Buat sheet baru jika belum ada
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Jika sheet masih kosong melompong, otomatis tulis Header-nya!
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    
    // Opsional: Mempercantik tampilan header di Excel/Spreadsheet-nya
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#e0e0e0");
    sheet.setFrozenRows(1); // Mengunci baris judul agar tidak ikut tergulir (scroll)
  }
  
  return sheet;
}

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    
    // Columns: Timestamp, Nama, Kehadiran, Jumlah_Orang, Ucapan
    sheet.appendRow([
      timestamp,
      data.nama || "",
      data.kehadiran || "",
      data.jumlah_orang || 0,
      data.ucapan || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    if (values.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Skip header row
    const entries = values.slice(1).map(row => ({
      timestamp: row[0],
      nama: row[1],
      kehadiran: row[2],
      jumlah_orang: row[3],
      ucapan: row[4]
    })).filter(entry => entry.ucapan !== ""); // Only return entries with messages

    // Return latest first
    entries.reverse();

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: entries }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
