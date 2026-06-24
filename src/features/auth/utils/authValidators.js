export const PASSWORD_REGEXES = {
  length: /^.{8,}$/,
  uppercase: /[A-Z]/,
  number: /\d/,
};

// Validar que el nombre/apellido no contengan caracteres extraños
const NAME_REGEX = /^[A-Za-zÁéíóúáéíóúÑñ\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const prueba ="";

export const checkPasswordStrength = (password) => {
  return {
    hasMinLength: PASSWORD_REGEXES.length.test(password),
    hasUppercase: PASSWORD_REGEXES.uppercase.test(password),
    hasNumber: PASSWORD_REGEXES.number.test(password),
  };
};

export const validateRegisterForm = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'El nombre es obligatorio.';
  } else if (!NAME_REGEX.test(values.name)) {
    errors.name = 'El nombre no debe contener números ni símbolos.';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'El apellido es obligatorio.';
  } else if (!NAME_REGEX.test(values.lastname)) {
    errors.lastname = 'El apellido no debe contener números ni símbolos.';
  }

  if (!values.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.';
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = 'Por favor, ingresa un correo electrónico válido (ej. usuario@dominio.com).';
  }

  const strength = checkPasswordStrength(values.password);
  if (!strength.hasMinLength || !strength.hasUppercase || !strength.hasNumber) {
    errors.password = 'La contraseña no cumple con los requisitos de robustez.';
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = 'Debes aceptar los Términos de Servicio y la Política de Privacidad.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};