export const validateEmail = (email: string) => {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email) ? '' : "Veuillez entrer une adresse email valide.";
};

export const validatePassword = (password: string) => {
  return password.length >= 8 ? '' : "Votre mot de passe doit contenir au moins 8 caractères.";
};

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword ? '' : "Les mots de passe ne correspondent pas.";
};
