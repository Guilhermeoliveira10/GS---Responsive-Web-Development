import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <h1>Ocean Guardians</h1>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/quizzes" className="nav-link">Quizzes</Link>
          <Link href="/games" className="nav-link">Games</Link>
          <Link href="/challenges" className="nav-link">Challenges</Link>
          <Link href="/info" className="nav-link">Info</Link>
          <Link href="/login" className="nav-link">Login</Link> {/* Adicionando o link para a página de login */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
