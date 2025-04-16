"use client"

const WordOptions = ({ words, selectedWords, onWordSelect, disabled }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Select words:</h3>
      <div className="flex flex-wrap gap-3">
        {words.map((word, index) => {
          const isSelected = selectedWords.includes(index)
          return (
            <button
              key={index}
              onClick={() => !isSelected && !disabled && onWordSelect(word, index)}
              disabled={isSelected || disabled}
              className={`py-2 px-4 rounded-lg transition-all ${
                isSelected
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : disabled
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
              }`}
            >
              {word}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default WordOptions
