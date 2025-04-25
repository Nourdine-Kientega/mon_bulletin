import CryptoJS from "crypto-js";

// Add a secret key or salt (important!)
const SECRET_KEY = "wji3893nosjiu2alkmxcnnwjow"; // You can keep this in .env

// Function to hash password
export const hashPassword = (password: string): string => {
  return CryptoJS.HmacSHA256(password, SECRET_KEY).toString();
};

// Function to verify password
export const verifyPassword = (inputPassword: string, hashedPassword: string): boolean => {
  const inputHashed = hashPassword(inputPassword);
  return inputHashed === hashedPassword;
};
