import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Plans() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 text-gray-900 m-10 p-10">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            className="text-4xl font-bold text-indigo-700 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Insurance Plans
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Explore a range of insurance plans offered by LIC India, providing comprehensive coverage for your financial security. From life insurance to pension plans, we have solutions tailored to meet your needs.
          </p>

          {/* Endowment Plans */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-indigo-700">Endowment Plans</h2>
            <p className="mt-2 text-gray-700">Endowment plans offer a combination of savings and protection.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li><strong>LIC Jeevan Anand:</strong> Offers savings and protection benefits.</li>
              <li><strong>LIC New Endowment Plan:</strong> A secure and savings-oriented plan.</li>
            </ul>
          </div>

          {/* Money Back Plans */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-indigo-700">Money Back Plans</h2>
            <p className="mt-2 text-gray-700">Provides periodic payments while ensuring life cover.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li><strong>LIC New Money Back Plan – 20 Years:</strong> Periodic returns with life cover.</li>
              <li><strong>LIC Jeevan Tarun:</strong> Designed for children’s financial security.</li>
            </ul>
          </div>

          {/* Term Assurance Plans */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-indigo-700">Term Assurance Plans</h2>
            <p className="mt-2 text-gray-700">High coverage at affordable premiums.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li><strong>LIC Tech Term:</strong> Pure risk cover with flexibility.</li>
              <li><strong>LIC Jeevan Amar:</strong> Non-linked, protection-oriented plan.</li>
            </ul>
          </div>

          {/* Pension Plans */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-indigo-700">Pension Plans</h2>
            <p className="mt-2 text-gray-700">Ensuring a secure post-retirement life.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li><strong>LIC Jeevan Shanti:</strong> Immediate and deferred annuity plan.</li>
              <li><strong>LIC New Jeevan Nidhi:</strong> Pension plan with death cover.</li>
            </ul>
          </div>

          {/* ULIPs */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-indigo-700">ULIPs</h2>
            <p className="mt-2 text-gray-700">Combining investment with life cover.</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li><strong>LIC Nivesh Plus:</strong> Single premium investment-linked plan.</li>
              <li><strong>LIC SIIP:</strong> Regular premium ULIP plan.</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-indigo-700">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-700">
              Need help choosing the right plan? Our LIC agents are here to assist you.
            </p>
            <div className="mt-6">
              <a
                href="/Contact"
                className="bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-800 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}