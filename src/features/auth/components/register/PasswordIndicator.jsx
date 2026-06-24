import React from 'react';
import { checkPasswordStrength } from '../../utils/authValidators';

export const PasswordIndicator = ({ password }) => {
  if (!password) return null;

  const { hasMinLength, hasUppercase, hasNumber } = checkPasswordStrength(password);

  const Requirement = ({ label, met }) => (
    <div className="flex items-center space-x-2 text-xs">
      <span className={`w-2 h-2 rounded-full ${met ? 'bg-[#17B530]' : 'bg-[#F7333B]'}`} />
      <span className={met ? 'text-[#ABABAA]' : 'text-gray-500'}>{label}</span>
    </div>
  );

  return (
    <div className="p-3 bg-[#1A3353] rounded-md border border-[#4A4A4B] space-y-1.5 mt-1">
      <p className="text-[10px] font-bold text-white uppercase tracking-wider">Criterios requeridos:</p>
      <Requirement label="Mínimo 8 caracteres" met={hasMinLength} />
      <Requirement label="Al menos una letra mayúscula" met={hasUppercase} />
      <Requirement label="Al menos un número" met={hasNumber} />
    </div>
  );
};