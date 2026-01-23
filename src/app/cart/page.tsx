import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import { redirect } from 'next/navigation';

export default async function CartPage() {
  async function addUser(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!email) return;

    try {
      // 1. Save to Database
      await sql`INSERT INTO users (email) VALUES (${email});`;

      // 2. Send Professional Welcome Email
      if (apiKey) {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: 'Solcare <onboarding@resend.dev>',
          to: email,
          subject: '☀️ You’re on the list: Welcome to Solcare',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h1 style="color: #000; font-size: 24px;">Welcome to the SolCare Waitlist!</h1>
              <p>Hi there,</p>
              <p>Thanks for joining us! We’re building SolCare to change the way you think about solar.</p>
              <p>Best,<br />The SolCare Team</p>
            </div>
          `
        });
      }
    } catch (e) {
      console.error("Error:", e);
    }

    redirect('/cart/success'); 
  }

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-2">Join the Waitlist</h1>
      <p className="text-gray-600 mb-6">Enter your email to get early access to SolCare.</p>

      <form action={addUser} className="mb-4 flex gap-2">
        <input 
          name="email" 
          type="email" 
          placeholder="your@email.com" 
          required 
          className="border p-2 rounded w-full text-black bg-white focus:ring-2 focus:ring-black outline-none"
        />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Join
        </button>
      </form>
      
      <p className="text-xs text-gray-400 mt-4 italic">
        *By signing up, you'll be the first to know when we launch.
      </p>
    </div>
  );
}