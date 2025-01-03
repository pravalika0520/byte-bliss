import React from 'react';
import { Leaf, Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EcoKids Explorer</h1>
        </div>
        <nav className="flex gap-6">
          <a href="#learn" className="hover:text-green-200 transition-colors">Learn</a>
          <a href="#quiz" className="hover:text-green-200 transition-colors">Quiz</a>
          <a href="#stories" className="hover:text-green-200 transition-colors">Stories</a>
        </nav>
      </div>
    </header>
  );
}