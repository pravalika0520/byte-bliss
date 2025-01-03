import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Story } from './components/Story';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        <section id="learn" className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Learn About Our Planet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Water",
                image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=400",
                description: "Learn how to save water in your daily life"
              },
              {
                title: "Plant Trees",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400",
                description: "Discover why trees are important for our planet"
              },
              {
                title: "Reduce Waste",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=400",
                description: "Simple ways to reduce waste at home and school"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="quiz" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Test Your Knowledge</h2>
          <Quiz />
        </section>

        <section id="stories" className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Environmental Stories</h2>
          <Story />
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">Together we can make our planet greener! 🌍</p>
        </div>
      </footer>
    </div>
  );
}

export default App;