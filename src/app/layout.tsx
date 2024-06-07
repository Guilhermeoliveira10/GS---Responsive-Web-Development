import './globals.css'
import '../styles/custom.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ocean Guardians',
  description: 'Educação e Conscientização Ambiental',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="header">
          <nav>
            <h1>Ocean Guardians</h1>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/quizzes" className="nav-link">Quizzes</Link>
              <Link href="/games" className="nav-link">Games</Link>
              <Link href="/challenges" className="nav-link">Challenges</Link>
              <Link href="/info" className="nav-link">Info</Link>
              <Link href="/login" className="nav-link">Login</Link>
            </div>
          </nav>
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <p>2024 Ocean Guardians</p>
          <p>Guilherme Augusto de Oliveira, RM554176</p>
          <p>Luiz Alecsander Viana, RM553034</p>
        </footer>
      </body>
    </html>
  )
}
