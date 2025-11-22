export default function Loading() {
  return (
    <div className="p-5">
      <div className="h-6 w-40 bg-gray-300 rounded mb-4 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-300 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-300 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}