import React, { useState } from "react";
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

const MenuIcon = ({ size = 24, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
);

const XIcon = ({ size = 24, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Jeevan Saathi</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Home</Link>
          <Link to="/Plans" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Plans</Link>
          <Link to="/About" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">About</Link>
          <Link to="/Contact" className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
            Contact Us
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/Plans" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Plans</Link></li>
            <li><Link to="/About" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>About</Link></li>
            <li>
              <Link to="/Contact" className="bg-blue-600 text-white px-6 py-2 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
