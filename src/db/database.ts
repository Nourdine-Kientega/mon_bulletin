import * as SQLite from 'expo-sqlite';
import { createTables } from './schema';

export let db: SQLite.SQLiteDatabase;

export const initDatabase = async () => {
  try {
    db = await SQLite.openDatabaseAsync('myAppDB');
    await db.execAsync('PRAGMA journal_mode = WAL;'); // Plus performant
    await createTables(db);
    // console.log('📦 Database initialized');
  } catch (error) {
    console.error('❌ Failed to initialize DB:', error);
  }
};
