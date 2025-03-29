import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-90 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jeevan Shanthi</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/Plans" className="hover:text-yellow-400">Plans</Link></li>
          <li><Link to="/About" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/Contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-transparent text-center">
          <li><Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/Plans" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Plans</Link></li>
          <li><Link to="/About" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/Contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar1;
