import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Ocean Guardians</h1>
      <p className="text-lg">Educação e Conscientização Ambiental</p>
      <nav className="space-x-4">
        <Link href="/quizzes">
          <span className="text-blue-500 underline cursor-pointer">Quizzes</span>
        </Link>
        <Link href="/games">
          <span className="text-blue-500 underline cursor-pointer">Games</span>
        </Link>
        <Link href="/challenges">
          <span className="text-blue-500 underline cursor-pointer">Challenges</span>
        </Link>
        <Link href="/info">
          <span className="text-blue-500 underline cursor-pointer">Info</span>
        </Link>
      </nav>
    </div>
  )
}
