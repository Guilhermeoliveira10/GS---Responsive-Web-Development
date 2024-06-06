import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
        <header className="p-4 bg-blue-700 text-white">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">Ocean Guardians</h1>
            <div className="space-x-5">
              <Link href="/">Home</Link>
              <Link href="/quizzes">Quizzes</Link>
              <Link href="/games">Games</Link>
              <Link href="/challenges">Challenge</Link>
              <Link href="/info">Info</Link>
            </div>
          </nav>
        </header>
  );
};



export default Navigation;
