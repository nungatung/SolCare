import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import SolarDemo from '../../../components/SolarDemo'; 

async function getSolarImpactData() {
  try {
    const response = await fetch('https://api.helioapi.com/calculate-co2-reduction', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HELIO_API_KEY}`,
        'Content-Type': 'application/json'
      },
      // FIX: Matches the required schema you provided
      body: JSON.stringify({
        country: "new zealand",
        region: "national",
        kwh_generated: 450 // Base value for demo
      }), 
      next: { revalidate: 3600 } 
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("WAITLIST_LOG: API Error", error);
    return null;
  }
}

export default async function Home() {
  const apiData = await getSolarImpactData();

  // Logic for the database (Lead Capture)
  async function addUser(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    if (!email) return;
    try {
      await sql`INSERT INTO users (email) VALUES (${email});`;
    } catch (e) {
      console.error(e);
    }
    revalidatePath('/');
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">
            Solcare <span className="text-blue-600">AI.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Automated efficiency tracking and maintenance scheduling.
          </p>
        </div>

        {/* Passing the real API data to our new smart component */}
        <SolarDemo apiData={apiData} />

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
           <form action={addUser} className="flex flex-col gap-3">
            <input name="email" type="email" placeholder="your@email.com" required className="border p-3 rounded-xl text-black" />
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}