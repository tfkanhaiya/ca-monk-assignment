"use client"

const FeedbackScreen = ({ userAnswers, questions, playerName, onPlayAgain }) => {
  // Calculate score
  let correctCount = 0

  const results = questions.map((question, index) => {
    const userAnswer = userAnswers[index] || []
    const correctAnswers = question.correctAnswers

    // Check if answers are correct
    const isCorrect =
      userAnswer.length === correctAnswers.length && userAnswer.every((word, i) => word === correctAnswers[i])

    if (isCorrect) correctCount++

    return {
      question,
      userAnswer,
      correctAnswers,
      isCorrect,
    }
  })

  const score = correctCount
  const totalQuestions = questions.length

  // Calculate percentage for score display
  const percentage = (score / totalQuestions) * 100

  // Determine feedback message based on score
  const getFeedbackMessage = () => {
    if (percentage >= 80) return "Excellent job!"
    if (percentage >= 60) return "Good work!"
    if (percentage >= 40) return "Nice effort!"
    return "Keep practicing!"
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Results</h1>
          {playerName && <p className="text-lg text-gray-600 mb-6">Great effort, {playerName}!</p>}

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">Score:</span>
              <span className="text-lg font-bold">
                {score} out of {totalQuestions}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full ${
                  percentage >= 70 ? "bg-green-500" : percentage >= 40 ? "bg-yellow-500" : "bg-red-500"
                }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p className="mt-2 text-center font-medium text-gray-700">{getFeedbackMessage()}</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Question Review</h2>

            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  result.isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                }`}
              >
                <h3 className="font-medium text-gray-800 mb-2">
                  Question {index + 1}:{" "}
                  {result.isCorrect ? (
                    <span className="text-green-600">Correct</span>
                  ) : (
                    <span className="text-red-600">Incorrect</span>
                  )}
                </h3>

                <div className="mb-2">
                  <p className="text-gray-700">{result.question.sentence}</p>
                </div>

                {!result.isCorrect && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Your answer:</p>
                    <p className="text-red-600">{result.userAnswer.join(", ") || "No answer provided"}</p>

                    <p className="text-sm font-medium text-gray-700 mt-2">Correct answer:</p>
                    <p className="text-green-600">{result.correctAnswers.join(", ")}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onPlayAgain}
              className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackScreen
