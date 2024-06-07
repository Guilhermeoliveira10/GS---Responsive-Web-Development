import React from 'react'
import '../styles/custom.css'
import Layout from './Layout'

const GameComponent: React.FC = () => {
  return (
    <Layout>
      <div className="game-component card">
        <h1 className="text-2xl font-bold mb-4">Jogo da Vida Marinha</h1>
        <p>O jogo ainda está sendo produzido...</p>
      </div>
    </Layout>
  )
}

export default GameComponent
