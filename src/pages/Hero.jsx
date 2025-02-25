import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
    <Navbar />
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center p-6">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <motion.div 
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold flex items-center justify-center gap-3">
          <FaShieldAlt className="text-yellow-400" /> Your Future, Our Protection
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Secure your family’s future with reliable life insurance plans. Get the best coverage at affordable rates.
        </p>
        <div className="mt-6 flex justify-center gap-4">
        <Link to={"/Plans"}>
          <button className="bg-yellow-400 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-300">
            Browse Our Plans
          </button>
          </Link>
          <Link to={"/About"}>
          <button className="bg-transparent border border-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-indigo-700">
            Learn More
          </button>
          </Link>
        </div>
      </motion.div>
    </section>
    </>
  );
}
