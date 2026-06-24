import './index.css'
import React from 'react';
import { RegisterForm } from '@features/auth/components/register/RegisterForm'; // ⬅️ Importación absoluta con alias

function App() {
  return (
    <>
      {/* Renderizamos directamente el formulario de registro para la prueba */}
      <RegisterForm />
    </>
  );
}

export default App;