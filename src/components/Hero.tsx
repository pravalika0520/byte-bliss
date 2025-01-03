import React from 'react';
import { Globe } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-400 to-green-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <Globe className="h-16 w-16 mx-auto mb-6 animate-bounce" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome Young Earth Heroes!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Join us on an exciting journey to save our planet
        </p>
        <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">
          Start Your Adventure
        </button>
      </div>
    </div>
  );
}