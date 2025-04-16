"use client"

const Navigation = ({ onNext, isDisabled, isLastQuestion }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onNext}
        disabled={isDisabled}
        className={`py-2 px-6 rounded-lg font-medium ${
          isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
        }`}
      >
        {isLastQuestion ? "Finish" : "Next"}
      </button>
    </div>
  )
}

export default Navigation
