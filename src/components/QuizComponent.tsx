import React, { useState } from 'react'

const QuizComponent: React.FC = () => {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      question: 'Que porcentagem da superfície da Terra é coberta por oceanos?',
      options: ['50%', '60%', '70%', '80%'],
      answer: '70%',
    },
    {
      question: 'Qual é a maior fonte de poluição nos oceanos?',
      options: ['Plástico', 'Esgotos e resíduos agrícolas', 'Poluição por petróleo', 'Todos os anteriores'],
      answer: 'Plástico',
    },
    {
      question: 'Quanto do plástico produzido mundialmente acaba nos oceanos a cada ano?',
      options: ['5 milhões de toneladas', '8 milhões de toneladas', '12 milhões de toneladas', '15 milhões de toneladas'],
      answer: '8 milhões de toneladas',
    },
    {
      question: 'Que porcentagem das espécies marinhas está ameaçada de extinção devido à atividade humana?',
      options: ['25%', '50%', '75%', '90%'],
      answer: '90%',
    },
  ]

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      alert(`Quiz finalizado! Seu resultado é ${score + 1}`)
      setCurrentQuestion(0)
      setScore(0)
    }
  }

  return (
    <div className="quiz-component">
      <h1 className="text-2xl font-bold mb-4">Quiz sobre a Vida Marinha</h1>
      <div className="card">
        <h2 className="quiz-question">{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].options.map(option => (
          <button 
            key={option} 
            onClick={() => handleAnswer(option)}
            className="quiz-option"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizComponent
