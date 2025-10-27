import React from 'react';
import HoroscopeCarousel from './HoroscopeCarousel';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export default function App() {
  const handleExport = async () => {
    const carousel = document.querySelector('.grid');
    if (!carousel) return;

    const canvas = await html2canvas(carousel, { useCORS: true, scale: 2 });
    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, 'astroloG_horoscope_carousel.png');
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <HoroscopeCarousel />
      <button
        onClick={handleExport}
        className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold"
      >
        Export Carousel
      </button>
    </div>
  );
}