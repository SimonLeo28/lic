import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Link = ({ to, children, className }) => (
    <a href={to} className={className}>{children}</a>
);

// --- Custom Hero Illustration ---
const HeroIllustration = () => (
    <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full blur-3xl opacity-50"></div>
        <svg className="relative w-full h-auto max-w-lg mx-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2563EB" d="M49.3,-64.7C64.3,-54.2,77.2,-40.1,81.1,-23.8C85,-7.5,79.9,11,70.5,26.4C61.1,41.8,47.4,54.1,31.7,64.2C16.1,74.3,-1.4,82.2,-19.1,79.8C-36.8,77.3,-54.6,64.4,-66.1,48.2C-77.6,32,-82.7,12.4,-80.7,-6.1C-78.7,-24.6,-69.5,-42.1,-55.8,-52.7C-42.1,-63.3,-24.1,-67,-7.1,-65.4C9.9,-63.9,19.9,-57.1,28.8,-55.2C37.8,-53.3,45.7,-56.3,49.3,-64.7Z" transform="translate(100 100) scale(1.1)" />
            <g transform="translate(100 100) scale(0.6)" fill="#FFFFFF">
                <path d="M50,90 C10,90 10,10 50,10 L50,0 C-10,0 -10,100 50,100 L50,90 Z" transform="translate(-50, -50)" />
                <circle cx="0" cy="0" r="15" />
                <path d="M-20,-10 a20,20 0 0,1 40,0" />
            </g>
        </svg>
    </div>
);


export default function Hero() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* --- Text Content --- */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
                Your Future, <br/>
                <span className="text-blue-600">Protected Today.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Find peace of mind with our trusted insurance plans. We offer comprehensive coverage tailored to your life's journey, ensuring your loved ones are secure, no matter what.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link to="/plans" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Explore Plans
                </Link>
                <Link to="/contact" className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-slate-200 transition-colors duration-300">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* --- Illustration --- */}
            <div className="hidden md:block">
                <HeroIllustration />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

