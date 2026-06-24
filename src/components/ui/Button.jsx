import React from 'react';

export const Button = ({ children, variant = 'primary', isLoading, className = '', ...props }) => {
  // Bordes del botón fijados de manera mandatoria a 8px (rounded-lg)
  const baseStyles = 'w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#FFBE18] text-gray-900 hover:bg-[#FFBE18]/90 focus:ring-2 focus:ring-[#FFBE18]/50', // Tono corporativo naranja/amarillo
    google: 'bg-transparent text-white border border-[#4A4A4B] hover:bg-white/5',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} disabled={isLoading} {...props}>
      {isLoading ? (
        // Escenario 1: Procesa los datos mostrando un Loading Circle animado
        <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : children}
    </button>
  );
};