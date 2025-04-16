# 🧠 Sentence Construction Tool

A sentence completion game built with **Vite + React + Tailwind CSS** for the CA MONK Frontend Internship assignment.

## 🛠 Tech Stack

- Vite + React
- Tailwind CSS
- Javascript
- JSON Server (for local API)

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

ca-monk-assignment/
├── public/
│   └── vite.svg                # Vite logo or other static assets
├── src/
│   ├── components/             # Reusable components
│   │   ├── IntroPage.jsx       # Intro screen for the game
│   │   ├── Timer.jsx           # Timer component to handle countdown
│   │   ├── Question.jsx        # Displays the current question
│   │   ├── WordOptions.jsx     # Word options to fill blanks
│   │   ├── FeedbackScreen.jsx  # Feedback screen at the end of the game
│   │   └── Navigation.jsx      # Navigation for Next/Previous question
│   │
│   ├── services/               # Utility functions for data fetching
│   │   └── api.js              # Fetch questions data from JSON server
│   │
│   ├── App.jsx                 # Main component that contains the game logic
│   ├── main.jsx                # Entry point for the React application
│   ├── index.css               # Tailwind and custom CSS styles
│   └── tailwind.config.js      # Tailwind CSS configuration file
├── db.json                     # Mock data for JSON Server (questions)
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration file
└── README.md                   # Project documentation

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/tfkanhaiya/ca-monk-assignment.git
cd ca-monk-assignment
npm install
npm run server
npm run dev


