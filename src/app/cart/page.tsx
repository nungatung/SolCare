import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export default async function CartPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { rows } = await sql`SELECT * FROM users ORDER BY created_at DESC;`;
  const success = searchParams.success === 'true';

  async function addUser(formData: FormData) {
    'use server';
    const email = formData.get('email');
    try {
      if (email) {
        await sql`INSERT INTO users (email) VALUES (${email.toString()});`;
        revalidatePath('/cart');
        // We redirect to the same page with a success flag
        return { success: true };
      }
    } catch (e) {
      return { error: "Email already exists or database error" };
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