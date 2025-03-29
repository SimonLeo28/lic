import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-indigo-700 text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold">About Us</h2>
              <p className="mt-2 text-gray-200 text-sm">
                We provide trusted life insurance solutions to secure your future and your <Link to={"/test"}> loved ones.</Link>
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/About" className="hover:underline">About Us</Link></li>
                <li><Link to="/Plans" className="hover:underline">Our Plans</Link></li>
                <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
  
            {/* Contact Details */}
            <div>
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <p className="mt-2 text-sm text-gray-200">📍 Banglore, India</p>
              <p className="mt-1 text-sm text-gray-200">📞 +91 9148570090</p>
              <p className="mt-1 text-sm text-gray-200">✉ wa9696@gmail.com</p>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h2 className="text-xl font-semibold">Follow Us</h2>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="hover:scale-110 transition"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:scale-110 transition"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:scale-110 transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:scale-110 transition"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-gray-300 text-sm mt-8">
            © {new Date().getFullYear()} LifeSecure Insurance. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  