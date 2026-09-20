# Google Workspace Automation

The operational backend leverages Google Workspace (Forms, Sheets, Apps Script, Chat) to automate enrollment routing, roster upkeep, and dashboard analytics.

---

## ⚙️ Core Apps Script Architecture

### 1. Dynamic Submission Routing (`appendRowToTab`)
When a student completes the central enrollment form, an Apps Script trigger executes `appendRowToTab`:
- Parses submission entries (student ID, batch, selected club, leadership interest).
- Dynamically routes the record into the appropriate Club Tab or `Leadership_Applicants` tab.
- Applies standard cell formatting across all rows: **Roboto 10pt font**, top vertical alignment, text wrapping, and clean numeric centering.

### 2. Live Analytics Dashboard (`generateDashboard`)
The `generateDashboard` script updates a centralized visual dashboard tab tracking:
- Total ecosystem enrollments and active member counts.
- Leadership applicant distribution per club.
- Batch-wise (2nd Year / 3rd Year) participation breakdowns.
- Capacity utilization percentages per club.

---

## 🔒 Data Security & Privacy Policy

> [!CAUTION]
> In compliance with university privacy guidelines, script source files, API keys, webhook URLs, and stored spreadsheet data **must never expose private credentials, OAuth tokens, passwords, or confidential student contact details** in public repositories.
