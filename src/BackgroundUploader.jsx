import React from 'react';

export default function BackgroundUploader({ onSelectBackground }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => onSelectBackground(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <label className="text-gray-200 mb-2 font-medium">Upload Background Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block text-sm text-gray-300 cursor-pointer focus:outline-none"
      />
    </div>
  );
}