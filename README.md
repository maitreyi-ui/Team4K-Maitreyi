# 🔍 ClueLens

An AI-powered Digital Forensic Investigation Assistant that helps investigators analyze digital evidence using Google's Gemini AI.

## ✨ Features

- 📂 Upload digital evidence files
- 🤖 AI-powered evidence analysis
- 👥 Extract people involved
- 📍 Identify locations
- 📅 Detect important dates and events
- 🧾 Identify evidence items
- 📈 Generate investigation timeline
- 📊 Interactive dashboard
- 📑 Investigation reports

---

## 🛠 Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- Python
- SQLite
- SQLAlchemy

### AI
- Google Gemini API

---

## 📁 Project Structure

```
Team4K-Maitreyi
│
├── frontend
│   ├── app
│   ├── components
│   └── ...
│
├── backend
│   ├── app
│   ├── routes
│   ├── services
│   └── ...
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Team4K-Maitreyi
```

---

### 2. Backend Setup

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
DATABASE_URL=sqlite:///./backend/app/database/cluelens.db
UPLOAD_DIR=./backend/app/uploads
```

---

## 📂 Supported File Types

- TXT

## 🧠 How It Works

1. Upload evidence files.
2. Backend extracts text from the uploaded files.
3. Gemini AI analyzes the extracted content.
4. Structured forensic insights are generated.
5. Results are displayed on the dashboard.

---

## 🔮 Future Improvements

- OCR for images
- Advanced PDF parsing
- Interactive evidence graph
- Case management
- Authentication
- PDF report export

---

## 👥 Team
4K

Project: **ClueLens**
