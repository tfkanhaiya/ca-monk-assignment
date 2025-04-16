"use client"

import { useState, useEffect } from "react"
import Timer from "./components/Timer"
import Question from "./components/Question"
import WordOptions from "./components/WordOptions"
import FeedbackScreen from "./components/FeedbackScreen"
import Navigation from "./components/Navigation"
import IntroPage from "./components/IntroPage"
import { fetchQuestions } from "./services/api"

function App() {
  const [gameState, setGameState] = useState("intro")
  const [playerName, setPlayerName] = useState("")
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [selectedWords, setSelectedWords] = useState([])
  const [blanks, setBlanks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [timeExpired, setTimeExpired] = useState(false)

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchQuestions()
        setQuestions(data)
        setUserAnswers(new Array(data.length).fill(null).map(() => []))
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to fetch questions:", error)
        setIsLoading(false)
      }
    }

    if (gameState === "playing") {
      loadQuestions()
    }
  }, [gameState])

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      setSelectedWords([])
      const currentQuestion = questions[currentQuestionIndex]
      const blankCount = (currentQuestion.sentence.match(/______/g) || []).length
      setBlanks(new Array(blankCount).fill(null))
      setTimeExpired(false)
    }
  }, [currentQuestionIndex, questions])

  const handleStartGame = (name) => {
    setPlayerName(name)
    setGameState("playing")
  }

  const handleWordSelect = (word, index) => {
    const emptyBlankIndex = blanks.findIndex((blank) => blank === null)
    if (emptyBlankIndex !== -1) {
      const newBlanks = [...blanks]
      newBlanks[emptyBlankIndex] = { word, originalIndex: index }
      setBlanks(newBlanks)

      const newSelectedWords = [...selectedWords, index]
      setSelectedWords(newSelectedWords)
    }
  }

  const handleBlankClick = (blankIndex) => {
    if (blanks[blankIndex] !== null) {
      const originalWordIndex = blanks[blankIndex].originalIndex
      const newSelectedWords = selectedWords.filter((index) => index !== originalWordIndex)
      setSelectedWords(newSelectedWords)

      const newBlanks = [...blanks]
      newBlanks[blankIndex] = null
      setBlanks(newBlanks)
    }
  }

  const handleNextQuestion = () => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestionIndex] = blanks.map((blank) => blank?.word || "")
    setUserAnswers(newUserAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setGameState("completed")
    }
  }

  const handleTimerEnd = () => {
    setTimeExpired(true)
    setTimeout(() => {
      handleNextQuestion()
    }, 1000)
  }

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setSelectedWords([])
    setBlanks([])
    setGameState("intro")
  }

  if (gameState === "intro") return <IntroPage onStartGame={handleStartGame} />

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="text-2xl font-semibold text-indigo-600 animate-pulse">Loading questions...</div>
      </div>
    )
  }

  if (gameState === "completed") {
    return (
      <FeedbackScreen
        userAnswers={userAnswers}
        questions={questions}
        playerName={playerName}
        onPlayAgain={handlePlayAgain}
      />
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const allBlanksFilled = blanks.every((blank) => blank !== null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-10">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-indigo-800">🧠 Sentence Challenge</h1>
            <div className="text-lg text-gray-600">
              Question {currentQuestionIndex + 1} / {questions.length}
            </div>
          </div>

          <Timer duration={30} onTimerEnd={handleTimerEnd} isActive={!timeExpired} />

          <Question sentence={currentQuestion.sentence} blanks={blanks} onBlankClick={handleBlankClick} />

          <WordOptions
            words={currentQuestion.options}
            selectedWords={selectedWords}
            onWordSelect={handleWordSelect}
            disabled={timeExpired}
          />

          <Navigation
            onNext={handleNextQuestion}
            isDisabled={!allBlanksFilled || timeExpired}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />

          {timeExpired && (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-700 rounded-lg shadow-sm font-medium">
              ⏰ Time's up! Moving to the next question...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

