"use client"

const Question = ({ sentence, blanks, onBlankClick }) => {
  const parts = sentence.split("______")

  return (
    <div className="mb-6 sm:mb-10">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Fill in the blanks:</h2>
      <div className="text-lg sm:text-2xl leading-8 text-gray-900 flex flex-wrap gap-y-2">
        {parts.map((part, index) => (
          <span key={index} className="flex items-center">
            {part}
            {index < parts.length - 1 && (
              <span
                onClick={() => onBlankClick(index)}
                className={`inline-flex items-center justify-center min-w-[80px] sm:min-w-[120px] h-10 px-3 mx-2 rounded-md border-2 text-base cursor-pointer transition ${
                  blanks[index]
                    ? "bg-indigo-100 border-indigo-500 text-indigo-700 font-medium"
                    : "border-gray-300 bg-gray-100 text-gray-400"
                }`}
              >
                {blanks[index] ? blanks[index].word : "_____"}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Question


