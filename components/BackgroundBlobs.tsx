export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Large organic background shapes - Hidden on mobile */}
      <div className="absolute top-32 -left-24 w-80 h-80 amber-bg bg-blob-1 bg-blob-animate-1 bounce-1 hidden md:block"></div>
      <div className="absolute top-96 -right-32 w-64 h-64 orange-pantone-bg bg-blob-2 bg-blob-animate-2 transform scale-75 bounce-2 hidden md:block"></div>
      <div className="absolute bottom-80 left-1/4 w-48 h-48 air-superiority-blue-bg bg-blob-3 bg-blob-animate-3 bounce-3 hidden lg:block"></div>
      <div className="absolute bottom-24 right-1/3 w-56 h-56 dark-teal-bg bg-blob-4 bg-blob-animate-1 transform scale-90 bounce-4 hidden lg:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
      
      {/* Medium organic blobs */}
      <div className="absolute top-1/3 left-1/3 w-16 h-16 md:w-32 md:h-32 amber-bg bg-blob-5 bg-blob-animate-2 transform rotate-45 bounce-5"></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 md:w-40 md:h-40 orange-pantone-bg bg-blob-6 bg-blob-animate-3 bounce-1"></div>
      <div className="absolute bottom-1/2 left-16 w-14 h-14 md:w-28 md:h-28 air-superiority-blue-bg bg-blob-1 bg-blob-animate-1 bounce-6 hidden sm:block"></div>
      
      {/* Small floating organic shapes */}
      <div className="absolute top-1/4 left-20 w-12 h-12 md:w-16 md:h-16 dark-teal-bg bg-blob-2 bg-blob-animate-2 bounce-2" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
      <div className="absolute top-1/2 right-32 w-8 h-8 md:w-12 md:h-12 amber-bg bg-blob-3 bg-blob-animate-3 bounce-3"></div>
      <div className="absolute bottom-1/3 left-1/2 w-10 h-10 md:w-20 md:h-20 orange-pantone-bg bg-blob-4 bg-blob-animate-1 bounce-4"></div>
      <div className="absolute top-3/4 left-1/4 w-16 h-16 md:w-24 md:h-24 air-superiority-blue-bg bg-blob-5 bg-blob-animate-2 bounce-5 hidden sm:block"></div>
      <div className="absolute top-20 right-1/3 w-10 h-10 md:w-14 md:h-14 dark-teal-bg bg-blob-6 bg-blob-animate-3 bounce-6" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
      <div className="absolute bottom-40 right-16 w-12 h-12 md:w-18 md:h-18 amber-bg bg-blob-1 bg-blob-animate-1 bounce-1 hidden sm:block"></div>
      
      {/* Additional blobs */}
      <div className="absolute top-1/2 left-8 w-14 h-14 md:w-22 md:h-22 dark-teal-bg bg-blob-3 bg-blob-animate-2 bounce-4 hidden sm:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-18 h-18 md:w-26 md:h-26 dark-teal-bg bg-blob-5 bg-blob-animate-1 bounce-2 hidden md:block" style={{'--tw-bg-opacity': '1', backgroundColor: 'var(--dark-teal)'}}></div>
    </div>
  );
}