import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Astrolo-G</h1>
          <p className="text-xl text-white/90">Your Astrology Companion</p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Astrolo-G
            </h2>
            <p className="text-gray-600 mb-4">
              This is a placeholder for the astrology application.
            </p>
            
            {/* TODO: Add astrology-specific UI components here */}
            {/* - Birth chart calculator */}
            {/* - Daily horoscope display */}
            {/* - Zodiac sign information */}
            {/* - Planetary positions */}
            
            <div className="bg-gray-50 rounded-md p-4">
              <p className="text-gray-700">
                Replace this section with your astrology features.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Feature 1
              </h3>
              <p className="text-gray-600">
                {/* TODO: Add astrology feature logic */}
                Placeholder for astrology feature
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Feature 2
              </h3>
              <p className="text-gray-600">
                {/* TODO: Add astrology feature logic */}
                Placeholder for astrology feature
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
