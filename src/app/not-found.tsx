import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 text-center font-sans">
      {/* Background/Watermark Text for extra depth */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h1 className="text-[300px] font-black text-white whitespace-nowrap">
          MISSING
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Bold 404 matching your H1 style */}
        <h1 className="text-[100px] md:text-[150px] font-black text-white leading-none tracking-tighter">
          404
        </h1>
        
        {/* Thematic Error Message */}
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase mt-2 mb-6 tracking-tight">
          FORM <span className="text-lightgreen">BREAKDOWN.</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 font-medium">
          Looks like you pushed a little too hard. The page you're looking for was dropped, deleted, or never existed.
        </p>

        {/* Call to Action Button matching your 'BROWSE WORKOUTS' button */}
        <Link 
          href="/" 
          className="px-8 py-4 bg-lightgreen text-black font-bold uppercase text-[14px] rounded-full hover:scale-105 transition-transform duration-200"
        >
          Return to Library
        </Link>
      </div>
    </div>
  );
}