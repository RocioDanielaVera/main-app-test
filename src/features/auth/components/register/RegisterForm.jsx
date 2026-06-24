import React, { useState } from 'react';
import { validateRegisterForm } from '../../utils/authValidators';
import { PasswordIndicator } from './PasswordIndicator';
import { Input } from '@components/ui/Input';
import { Button } from '@components/ui/Button';
import logo from '@/assets/svg/logo.svg';
import google from '@/assets/svg/google.svg';

export const RegisterForm = () => {
  // 1. Estados locales para manejar el formulario y los errores visuales
  const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '', acceptTerms: false });
  const [formErrors, setFormErrors] = useState({});
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Limpiamos la alerta roja si el usuario empieza a corregir el campo
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Escenario 2: Validamos los criterios locales de diseño de pantalla
    const { errors, isValid } = validateRegisterForm(formData);

    if (!isValid) {
      setFormErrors(errors); // Bloquea el envío y resalta los campos erróneos en rojo
      return;
    }

    // Simulamos un estado de carga local de 2 segundos para ver el círculo de carga (Escenario 1)
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      alert('¡Prueba local exitosa! Los datos son válidos y listos para ser procesados.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#272727] text-white flex flex-col justify-between p-6 font-['Roboto']">
      {/* Header con Isotipo horizontal */}
      <header className="flex justify-start items-center max-w-7xl mx-auto w-full">
        <img src={logo} alt="Argendar Logo" className="h-7 w-auto mb-6" />
      </header>

      {/* Tarjeta de Formulario Principal */}
      <main className="max-w-lg w-full mx-auto pt-16 mb-16 bg-[#212121]/40 border border-[#4A4A4B] p-8 rounded-xl backdrop-blur-md shadow-2xl my-auto">
        <div className="text-center mb-8">
          <h1 className=" text-2xl font-bold tracking-tight mb-2">Bienvenido a Argendar.</h1>
          <p className="text-sm text-[#ABABAA]">Únete a nuestra comunidad y transforma tu día a día.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Nombre" name="name" placeholder="Ingresa tu nombre" value={formData.name} onChange={handleChange} error={formErrors.name} />
            <Input label="Apellido" name="lastname" placeholder="Ingresa tu apellido" value={formData.lastname} onChange={handleChange} error={formErrors.lastname} />
          </div>

          <Input label="Correo" name="email" type="email" placeholder="Ingresa tu correo electrónico" value={formData.email} onChange={handleChange} error={formErrors.email} />
          
          <div>
            <Input label="Contraseña" name="password" type="password" placeholder="Ingresa tu contraseña" value={formData.password} onChange={handleChange} error={formErrors.password} />
            {/* Escenario 3: Feedback interactivo de requerimientos de la clave */}
            <PasswordIndicator password={formData.password} />
          </div>

          {/*Texto legal obligatorio */}
          <div className="flex flex-col space-y-1 pt-2">
            <label className="flex items-start space-x-3 text-xs text-[#ABABAA] cursor-pointer select-none">
              <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mt-0.5 rounded border-[#4A4A4B] bg-[#323232] text-[#3E79F7] focus:ring-0" />
              <span>
                Al registrarte, aceptas nuestros <a href="/terms" className="text-[#3E79F7] hover:underline">Términos de Servicio</a> y nuestra <a href="/privacy" className="text-[#3E79F7] hover:underline">Política de Privacidad</a>.
              </span>
            </label>
            {formErrors.acceptTerms && <span className="text-xs text-[#F7333B]">{formErrors.acceptTerms}</span>}
          </div>

          <div className="space-y-3 pt-4">
            <Button type="submit" className = "text-white text-xm bg-[#f87d25]"  isLoading={isPending}>Registrarme ahora</Button>
            <Button type="button" variant="google" >
              <div className='flex items-center'>
 <img src={google} alt="Argendar Logo" className="h-4 me-2" /> Registrarme con Google
              </div>

            </Button>
          </div>
        </form>

        <p className="text-center text-xs text-[#ABABAA] mt-6">
          ¿Ya tenés una cuenta? <a href="/login" className="text-[#3E79F7] font-medium hover:underline">Iniciar sesión</a>
        </p>
      </main>

      {/* Footer Legal */}
      <footer className="max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] text-gray-500 pt-6 border-t border-[#4A4A4B]/20">
        <span>© 2026 Argendar. Todos los derechos reservados.</span>
        <div className="space-x-4">
          <a href="/privacy" className="hover:text-white transition-colors">Privacidad</a>
          <a href="/terms" className="hover:text-white transition-colors">Términos</a>
          <a href="/support" className="hover:text-white transition-colors">Soporte</a>
        </div>
      </footer>
    </div>
  );
};