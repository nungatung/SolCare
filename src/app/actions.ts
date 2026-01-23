'use server'
import { sql } from '@vercel/postgres';

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email');

  try {
    // This creates the table if it doesn't exist and adds the email
    await sql`CREATE TABLE IF NOT EXISTS waitlist (email TEXT PRIMARY KEY, joined_at TIMESTAMP DEFAULT NOW());`;
    await sql`INSERT INTO waitlist (email) VALUES (${email as string});`;
    return { success: true };
  } catch (error) {
    return { success: false, error: "Maybe you're already on the list?" };
  }
}