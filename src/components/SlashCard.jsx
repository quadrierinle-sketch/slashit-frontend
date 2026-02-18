import React from 'react';
import { Clock } from 'lucide-react';

const SlashCard = ({ title, price, filled, total, timeLeft, status }) => {
  // Calculate percentage for the progress bar
  const progress = (filled / total) * 100;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
      <div className="flex gap-4">
        {/* Product Image Placeholder */}
        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
        
        {/* Card Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-dark">{title}</h3>
              <p className="text-primary font-bold">{price}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${status === 'Open' ? 'bg-green-100 text-primary' : 'bg-gray-100 text-gray-500'}`}>
              {status}
            </span>
          </div>

          {/* Progress Bar Section */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{filled}/{total} slots filled</span>
              <div className="flex items-center gap-1 text-red-500">
                <Clock size={12} />
                <span>{timeLeft}</span>
              </div>
            </div>
            
            {/* The Green Progress Line */}
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-400">{total - filled} slots remaining</span>
              <button className="text-primary text-sm font-semibold hover:underline">
                Join Slash →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlashCard;