import React from 'react';

function QuestionItem({ question, questionIndex, selectedAnswer, showResult, onSelect }) {
  const getButtonClass = (option) => {
    if (!showResult) {
      return selectedAnswer === option ? 'option-btn selected' : 'option-btn';
    }
    if (option === question.answer) return 'option-btn correct';
    if (option === selectedAnswer && option !== question.answer) return 'option-btn wrong';
    return 'option-btn';
  };

  return (
    <div className="quiz-card card">
      <div className="card-header">
        Q{questionIndex + 1}. {question.question}
      </div>
      <div className="card-body">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={getButtonClass(option)}
            onClick={() => !showResult && onSelect(questionIndex, option)}
            disabled={showResult}
          >
            <span style={{ marginRight: 8, fontWeight: 600 }}>
              {String.fromCharCode(65 + idx)}.
            </span>
            {option}
          </button>
        ))}
        {showResult && selectedAnswer && (
          <div className="mt-2" style={{ fontSize: '0.9rem', color: selectedAnswer === question.answer ? '#28a745' : '#dc3545' }}>
            {selectedAnswer === question.answer
              ? '✅ Correct!'
              : `❌ Wrong! The answer is: ${question.answer}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionItem;
