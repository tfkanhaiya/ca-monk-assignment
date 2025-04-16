# 🧠 Sentence Construction Tool

A sentence completion game built with **Vite + React + Tailwind CSS** for the CA MONK Frontend Internship assignment.

## 🛠 Tech Stack

- Vite + React
- Tailwind CSS
- TypeScript (optional)
- JSON Server (for local API)
- Deployed on Vercel

## 🚀 Features

- Sentence blanks with selectable words
- Unselect filled words by clicking on them
- 30-second timer for each question
- Auto navigation to next question on timeout
- "Next" button enabled only after all blanks are filled
- Final feedback screen showing:
  - Correct and incorrect answers
  - Final score out of 10

## 📂 Folder Structure

ca-monk-assignment/ ├── public/ ├── src/ │ ├── components/ │ │ ├── Intro.tsx │ │ ├── Game.tsx │ │ ├── Result.tsx │ │ ├── WordOptions.tsx │ │ ├── SentenceDisplay.tsx │ │ └── Timer.tsx │ ├── data/ │ │ └── types.ts │ ├── App.tsx │ └── main.tsx ├── db.json ├── index.html ├── tailwind.config.js ├── tsconfig.json ├── package.json └── README.md

bash
Copy
Edit

## ▶️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/tfkanhaiya/ca-monk-assignment.git
cd ca-monk-assignment
2. Install dependencies
bash
Copy
Edit
npm install
3. Run JSON Server
bash
Copy
Edit
npx json-server --watch db.json --port 3001
4. Start the app
bash
Copy
Edit
npm run dev