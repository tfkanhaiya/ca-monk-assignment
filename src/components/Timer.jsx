"use client"

import { useState, useEffect } from "react"

const Timer = ({ duration, onTimerEnd, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  useEffect(() => {
    if (!isActive) return

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          onTimerEnd()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [duration, onTimerEnd, isActive])

  // Calculate percentage for progress bar
  const percentage = (timeLeft / duration) * 100

  // Determine color based on time left
  const getColorClass = () => {
    if (timeLeft > duration * 0.6) return "bg-green-500"
    if (timeLeft > duration * 0.3) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">Time Remaining</span>
        <span className="text-sm font-medium text-gray-700">{timeLeft} seconds</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ${getColorClass()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Timer
