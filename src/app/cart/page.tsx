import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';

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
      await resend.emails.send({
        from: 'Solcare <onboarding@resend.dev>', // Resend provides this for testing
        to: email,
        subject: 'Welcome to the Solcare Waitlist!',
        html: `<h1>Thanks for joining!</h1><p>We're excited to have you. Stay tuned for updates.</p>`
      });

      revalidatePath('/cart');
    } catch (e) {
      console.error("Error:", e);
    }
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