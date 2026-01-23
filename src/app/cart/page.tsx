import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import {redirect} from 'next/navigation';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function CartPage() {
  const { rows } = await sql`SELECT * FROM users ORDER BY created_at DESC;`;

  async function addUser(formData: FormData) {
  'use server';
  const email = formData.get('email') as string;
  
  if (!email) return;

  try {
    // 1. Save to Database
    await sql`INSERT INTO users (email) VALUES (${email});`;

    // 2. Send Welcome Email
    if (resend) {
  await resend.emails.send({
    from: 'Solcare <onboarding@resend.dev>', 
    to: email,
    subject: '☀️ You’re on the list: Welcome to Solcare',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="color: #000; font-size: 24px;">Welcome to the Solcare Waitlist!</h1>
        <p>Hi there,</p>
        <p>Thanks for joining us! We’re building Solcare to change the way you think about solar, and we’re thrilled to have you with us from the very beginning.</p>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">What’s next?</h3>
          <ul style="padding-left: 20px;">
            <li><strong>Early Access:</strong> You'll be among the first to know when we launch.</li>
            <li><strong>Exclusive Updates:</strong> We'll send you sneak peeks of what we're building.</li>
            <li><strong>Founding Member Perks:</strong> Early supporters will get a special discount at launch.</li>
          </ul>
        </div>
        <p>Stay tuned for more updates soon!</p>
        <p>Best,<br />The Solcare Team</p>
        <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
        <p style="font-size: 12px; color: #999;">You received this because you signed up for the Solcare waitlist.</p>
      </div>
    `
  });
}
  } catch (e) {
    console.error("Error:", e);
    // You could redirect to an error page here if you wanted
  }

  // 3. Redirect to the success page
  redirect('/cart/success'); 
}

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-2">Join the Waitlist</h1>
      <p className="text-gray-600 mb-6">Test the system by entering your email below.</p>

      <form action={async (formData) => {
        'use server';
        await addUser(formData);
      }} className="mb-4 flex gap-2">
        <input 
          name="email" 
          type="email" 
          placeholder="your@email.com" 
          required 
          className="border p-2 rounded w-full text-black bg-white"
        />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Join
        </button>
      </form>

      {/* Database Table */}
      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Current Waitlist</h2>
        <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
          <table className="min-w-full text-black text-sm">
            <tbody className="divide-y">
              {rows.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3 text-right text-gray-400">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}