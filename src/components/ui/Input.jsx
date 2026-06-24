import React from 'react';

export const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      {label && (
        <label className="text-xs text-[#ABABAA] tracking-wide">
          {label}
        </label>
      )}
      <input

        className={`w-full px-4 py-2.5 bg-[#323232] border text-sm text-white rounded-md placeholder-gray-500 focus:outline-none transition-colors duration-200 ${
          error ? 'border-[#F7333B] focus:border-[#F7333B]' : 'border-[#4A4A4B] focus:border-[#3E79F7]'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-[#F7333B] mt-0.5">{error}</span>}
    </div>
  );
};