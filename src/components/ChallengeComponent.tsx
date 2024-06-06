import React, { useState, useEffect } from 'react'

const ChallengeComponent: React.FC = () => {
  const [challenges, setChallenges] = useState([
    { id: 1, text: 'Reduza o uso de plástico em 50% hoje' },
    { id: 2, text: 'Participe de uma limpeza de praia local' },
  ])

  const [currentChallenge, setCurrentChallenge] = useState(null)

  useEffect(() => {
    const today = new Date().getDate()
    setCurrentChallenge(challenges[today % challenges.length])
  }, [challenges])

  return (
    <div className="challenge-component card">
      <h1 className="text-2xl font-bold mb-4">Desafio Diário</h1>
      {currentChallenge && <p>{currentChallenge.text}</p>}
    </div>
  )
}

export default ChallengeComponent
