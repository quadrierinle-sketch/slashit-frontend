import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, X } from 'lucide-react';

const CreateSlash = () => {
  const [selectedTime, setSelectedTime] = useState('24h');
  const [preview, setPreview] = useState(null); // Stores the image URL to show
  const fileInputRef = useRef(null); // A reference to the hidden input

  // Trigger the hidden file input when the box is clicked
  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  // Handle the file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a fake URL to preview the image immediately
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  // Remove the image
  const removeImage = (e) => {
    e.stopPropagation(); // Stop the click from opening the file picker again
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="p-6 flex items-center gap-4 border-b border-gray-100">
        <Link to="/" className="text-dark">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold text-dark">Create a Slash</h1>
      </div>

      <div className="p-6">
        {/* Hidden File Input */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden" 
          accept="image/*"
        />

        {/* Image Upload Area */}
        <div 
          onClick={handleBoxClick}
          className={`relative w-full h-48 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden border-2 ${
            preview ? 'border-primary border-solid' : 'bg-gray-50 border-dashed border-gray-300 hover:bg-gray-100'
          } mb-6`}
        >
          {preview ? (
            // Show the selected image
            <>
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              <button 
                onClick={removeImage}
                className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-red-500 transition"
              >
                <X size={20} />
              </button>
            </>
          ) : (
            // Show the placeholder
            <>
              <ImageIcon size={48} className="text-gray-300 mb-2" />
              <span className="text-sm font-medium text-gray-400">Add product image</span>
            </>
          )}
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-bold text-dark mb-1">What are you slashing?</label>
            <input 
              type="text" 
              placeholder="e.g. 50kg bag of rice, carton of pasta" 
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-1">Description</label>
            <textarea 
              placeholder="Add details about the product" 
              rows="3"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary resize-none"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-dark mb-1">Price per slot (₦)</label>
              <input 
                type="number" 
                placeholder="e.g. 2,500" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-dark mb-1">Total slots</label>
              <input 
                type="number" 
                placeholder="e.g. 10" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-dark mb-2">Time Limit (hours)</label>
            <div className="flex gap-3">
              {['12h', '24h', '48h', '72h'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                    selectedTime === time 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">🕒 Ends: Feb 28, 10:26 PM</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-lg text-center text-xs text-gray-500">
            This slash will be tied to your primary hub: <span className="font-bold">Bodija</span>
          </div>

          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg mt-2 hover:opacity-90 transition">
            Create Slash
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSlash;