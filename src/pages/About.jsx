import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 text-gray-900 m-10 p-10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            className="text-4xl font-bold text-indigo-700"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About LIC India
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700">
            The Life Insurance Corporation of India (LIC) is the largest and most trusted life insurance provider in India. Established in 1956, LIC has been securing the financial future of millions of individuals and families through its comprehensive range of insurance policies.
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold text-indigo-700">Our Mission</h2>
              <p className="mt-2 text-gray-600">To provide reliable and affordable insurance plans that protect families and secure futures.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold text-indigo-700">Our Vision</h2>
              <p className="mt-2 text-gray-600">A world where every family has financial security and peace of mind through our insurance services.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold text-indigo-700">Our Values</h2>
              <p className="mt-2 text-gray-600">Integrity, commitment, and excellence in delivering the best insurance solutions for our clients.</p>
            </motion.div>
          </div>

          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold text-indigo-700">Why Choose LIC India?</h2>
            <p className="mt-4 text-lg text-gray-700">
              LIC offers a variety of life insurance products catering to different needs, including endowment plans, term insurance, pension plans, and ULIPs. With its vast network of agents and branches across India, LIC ensures that insurance services are accessible to all.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Over six decades of trust and excellence in insurance.</li>
              <li>Comprehensive insurance plans tailored to individual needs.</li>
              <li>Strong claim settlement ratio ensuring financial security.</li>
              <li>Wide network of branches and agents across India.</li>
              <li>Affordable premiums with multiple payment options.</li>
            </ul>
          </div>
          
          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold text-indigo-700">Popular LIC Insurance Plans</h2>
            <p className="mt-4 text-lg text-gray-700">
              LIC provides multiple insurance plans catering to different financial goals. Some of the popular plans include:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>LIC Jeevan Anand – A combination of endowment and whole life insurance.</li>
              <li>LIC Jeevan Umang – A life-long income plan with insurance coverage.</li>
              <li>LIC Tech Term – A pure term insurance plan with affordable premiums.</li>
              <li>LIC New Endowment Plan – A policy offering savings and life cover benefits.</li>
              <li>LIC Pension Plans – Secure retirement plans ensuring a steady income.</li>
            </ul>
          </div>
          
          <div className="mt-16 text-left">
            <h2 className="text-3xl font-bold text-indigo-700">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-700">
              For more details about LIC insurance plans and policies, visit the nearest LIC branch or contact an authorized LIC agent. You can also explore plans online at the official LIC website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
