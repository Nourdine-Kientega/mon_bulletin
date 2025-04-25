import { User } from '@/src/utils/types';
import { db } from '../database';

// Crée un nouvel utilisateur
export const addUser = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
) => {
  try {
    const result = await db.runAsync(
      `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, email, password]
    );
    return result.lastInsertRowId;
  } catch (error) {
    // console.error('Error adding user:', error);
    console.log('Error adding user:', error);
    throw error;
  }
};

// Récupère un utilisateur par son email
export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  try {
    const user = await db.getFirstAsync(
      `SELECT * FROM users WHERE email = ?`,
      [email]
    ) as User | undefined;
    return user;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    throw error;
  }
};
