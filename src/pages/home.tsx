import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen space-y-4">
    <h1 className="text-4xl font-bold">Ocean Guardians</h1>
    <p className="text-lg">Educação e conscientização ambiental</p>
    <nav className="space-x-4">
      <Link href="/quizzes" className="nav-link">
        Quizzes
      </Link>
      <Link href="/games" className="nav-link">
        Games
      </Link>
      <Link href="/challenges" className="nav-link">
        Challenges
      </Link>
      <Link href="/info" className="nav-link">
        Info
      </Link>
    </nav>
  </div>
)

export default Home
