import React, { useState, useEffect } from 'react'
import '../styles/custom.css'
import Layout from './Layout'

interface Challenge {
  id: number;
  text: string;
}

const ChallengeComponent: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    { id: 1, text: 'Reduza o uso de plástico em 50% hoje' },
    { id: 2, text: 'Participe de uma limpeza de praia local' },
  ])

  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null)

  useEffect(() => {
    const today = new Date().getDate()
    setCurrentChallenge(challenges[today % challenges.length])
  }, [challenges])

  return (
    <Layout>
      <div className="challenge-component card">
        <h1 className="text-2xl font-bold mb-4">Desafio diário</h1>
        {currentChallenge ? <p>{currentChallenge.text}</p> : <p>Carregando o desafio...</p>}
      </div>
    </Layout>
  )
}

export default ChallengeComponent
