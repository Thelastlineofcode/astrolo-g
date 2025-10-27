import React, { useState } from 'react';
import BackgroundUploader from './BackgroundUploader';

const zodiacSigns = [
  'Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
];

export default function HoroscopeCarousel() {
  const [background, setBackground] = useState(null);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Astrolo G Horoscope Carousel Generator</h1>
      <BackgroundUploader onSelectBackground={setBackground} />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className="relative border rounded-lg shadow-md p-4 flex items-center justify-center text-white text-xl font-semibold"
            style={{
              backgroundImage: background ? `url(${background})` : 'linear-gradient(180deg, #111827, #1f2937)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px'
            }}
          >
            {sign}
          </div>
        ))}
      </div>
    </div>
  );
}