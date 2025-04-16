import { useState } from "react"

const IntroPage = ({ onStartGame }) => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      onStartGame(name)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">🧠 Sentence Construction Game</h1>
        <p className="text-gray-600 text-center mb-6">
          Test your grammar and speed by filling in the blanks with the correct words.
          You have 30 seconds for each sentence. Good luck!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Game
          </button>
        </form>
      </div>
    </div>
  )
}

export default IntroPage

