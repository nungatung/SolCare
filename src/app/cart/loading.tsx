// app/cart/loading.tsx
export default function Loading() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Loading Cart Data...</h1>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 bg-gray-200 rounded mb-2"></div>
        <div className="h-8 bg-gray-200 rounded mb-2"></div>
      </div>
    </div>
  );
}