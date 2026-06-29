// This will later connect to PostgreSQL
// For now, we simulate library records

export async function retrieveLibraryData(query: string) {
  const records = [
    "Book: AI Fundamentals - Borrowed by John (Overdue)",
    "Book: Python for Data Science - Available",
    "Member: Abdullahi Bundi - Active Reader",
    "Report: 5 books overdue this week"
  ];

  // Return top relevant results
  return records.filter((r) =>
    r.toLowerCase().includes(query.toLowerCase())
  );
}
