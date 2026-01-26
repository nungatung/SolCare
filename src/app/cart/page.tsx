import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import SolarDemo from '../../../components/SolarDemo'; 
  

async function getSolarImpactData() {
  try {
    const response = await fetch('https://api.helioapi.com/calculate-co2-reduction', {
      method: 'POST', // Assuming calculation APIs require POST, change to GET if needed
      headers: {
        'Authorization': `Bearer ${process.env.HELIO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      // Passing a sample kWh value for the demo calculation
      body: JSON.stringify({ kwh_generated: 450 }), 
      next: { revalidate: 3600 } 
    });
    
    const data = await response.json();
    return {
      intensity: 0.01201, // Stated emission factor
      equivalents: data.impact_equivalents // Trees, miles, flights, bottles
    };
  } catch (error) {
    console.error("Helio API Error:", error);
    return null;
  }
}

export default async function CartPage() {
  const impactData = await getSolarImpactData();

  async function addUser(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    if (!email) return;
    await sql`INSERT INTO users (email) VALUES (${email});`;
    revalidatePath('/cart');
    redirect('/cart/success');
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Solar monitoring that <span className="text-blue-600">talks back.</span>
          </h1>
        </div>

        {/* Passing the rich data object to the client component */}
        <SolarDemo data={impactData} />

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm">
          <h3 className="text-lg font-bold mb-6">Join the Waitlist</h3>
          <form action={addUser} className="flex flex-col gap-3">
            <input name="email" type="email" placeholder="email@example.com" required className="border p-3 rounded-xl text-black" />
            <button type="submit" className="bg-black text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition">
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}