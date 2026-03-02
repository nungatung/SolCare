"use client";
import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const email = formData.get('email') as string;

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-yellow-400 font-medium p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
        <CheckCircle2 className="w-5 h-5" />
        <span>You're on the list! We'll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px] cursor-pointer"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  );
}