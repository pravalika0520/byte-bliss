import React from 'react';
import { TreePine, Droplets, Sun } from 'lucide-react';

export function Story() {
  return (
    <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-800">The Story of Little Seeds</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <TreePine className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <p className="text-lg">
            Once upon a time, there was a tiny seed named Pip who dreamed of becoming a tall, strong tree...
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <Droplets className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
          <p className="text-lg">
            With the help of rain drops and rich soil, Pip started to grow...
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <Sun className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
          <p className="text-lg">
            The warm sunlight helped Pip grow taller and stronger each day...
          </p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-green-800">What did we learn?</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Trees need water, sunlight, and good soil to grow</li>
          <li>Every big tree started as a tiny seed</li>
          <li>Nature works together to help plants grow</li>
        </ul>
      </div>
    </div>
  );
}