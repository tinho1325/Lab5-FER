import React, { useState } from 'react';
import { Container, Button, ProgressBar, Alert } from 'react-bootstrap';
import QuestionItem from '../components/QuestionItem';

const questions = [
  {
    question: 'Which fish is commonly used in Japanese sashimi?',
    options: ['Tilapia', 'Tuna', 'Catfish', 'Carp'],
    answer: 'Tuna',
  },
  {
    question: 'What is the main ingredient in a traditional Italian pizza dough?',
    options: ['Rice flour', 'Wheat flour', 'Corn flour', 'Barley flour'],
    answer: 'Wheat flour',
  },
  {
    question: 'Which cooking technique uses dry heat in an enclosed space?',
    options: ['Boiling', 'Steaming', 'Baking', 'Poaching'],
    answer: 'Baking',
  },
  {
    question: 'Sisig is a famous dish from which country?',
    options: ['Thailand', 'Vietnam', 'Philippines', 'Indonesia'],
    answer: 'Philippines',
  },
  {
    question: 'What does "Jamon de Bola" refer to?',
    options: ['A type of cheese', 'A round ham', 'A bread roll', 'A pastry'],
    answer: 'A round ham',
  },
  {
    question: 'Which vitamin is abundant in salmon?',
    options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
    answer: 'Vitamin D',
  },
  {
    question: 'What is "tadka" in South Asian cooking?',
    options: ['A type of bread', 'A spice blend', 'A cooking technique using hot oil and spices', 'A dessert'],
    answer: 'A cooking technique using hot oil and spices',
  },
  {
    question: 'A Waldorf salad traditionally includes which of these ingredients?',
    options: ['Pasta', 'Apples and walnuts', 'Croutons and anchovies', 'Chickpeas'],
    answer: 'Apples and walnuts',
  },
];

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (index, option) => {
    setAnswers({ ...answers, [index]: option });
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / questions.length) * 100);

  return (
    <div>
      <div className="page-banner">
        <h1>🍴 Food Knowledge Quiz</h1>
        <p>Test your culinary knowledge with these fun questions!</p>
      </div>

      <Container className="pb-5">
        <div className="quiz-container">

          {/* Score result */}
          {submitted && (
            <Alert
              variant={score >= questions.length * 0.7 ? 'success' : score >= questions.length * 0.4 ? 'warning' : 'danger'}
              className="text-center mb-4"
            >
              <div className="score-badge">{score}/{questions.length}</div>
              <h4 className="mt-2">
                {score === questions.length ? '🏆 Perfect Score!' :
                  score >= questions.length * 0.7 ? '🎉 Great Job!' :
                  score >= questions.length * 0.4 ? '👍 Not Bad!' : '📚 Keep Learning!'}
              </h4>
              <p className="mb-0 text-muted">You answered {score} out of {questions.length} questions correctly.</p>
            </Alert>
          )}

          {/* Progress */}
          {!submitted && (
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-muted">Progress</small>
                <small className="text-muted">{answered}/{questions.length} answered</small>
              </div>
              <ProgressBar now={progress} variant="warning" style={{ height: 8, borderRadius: 4 }} />
            </div>
          )}

          {/* Questions */}
          {questions.map((q, idx) => (
            <QuestionItem
              key={idx}
              question={q}
              questionIndex={idx}
              selectedAnswer={answers[idx]}
              showResult={submitted}
              onSelect={handleSelect}
            />
          ))}

          {/* Submit / Reset */}
          <div className="text-center mt-2">
            {!submitted ? (
              <Button
                className="btn-orange btn px-5"
                onClick={handleSubmit}
                disabled={answered < questions.length}
              >
                {answered < questions.length
                  ? `Answer all questions (${answered}/${questions.length})`
                  : 'Submit Quiz 🚀'}
              </Button>
            ) : (
              <Button className="btn-orange btn px-5" onClick={handleReset}>
                Try Again 🔄
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Quiz;
