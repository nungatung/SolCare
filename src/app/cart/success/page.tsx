import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-3xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold mb-4">You're on the list!</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Thanks for joining the SolCare waitlist. We've sent a welcome email to your inbox with more details.
      </p>
      <Link 
        href="/" 
        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}