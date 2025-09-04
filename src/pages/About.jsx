import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const MissionIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const VisionIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const ValuesIcon = () => (
  <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 18.331v-5.465a2 2 0 01.9-1.788l4.47-3.352A2 2 0 0114 7.962V10zm-4 7v4m4-11V4.5a2.5 2.5 0 00-5 0V10" /></svg>
);


export const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          
          {/* --- Header Section --- */}
          <header className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              About InsureCo
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              InsureCo is the largest and most trusted life insurance provider in the nation. Established in 1956, we have been securing the financial future of millions of individuals and families through our comprehensive range of insurance policies.
            </p>
          </header>

          {/* --- Mission, Vision, Values Cards --- */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <MissionIcon />
              <h2 className="text-2xl font-bold text-slate-700">Our Mission</h2>
              <p className="mt-2 text-gray-600">To provide reliable and affordable insurance plans that protect families and secure futures.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <VisionIcon />
              <h2 className="text-2xl font-bold text-slate-700">Our Vision</h2>
              <p className="mt-2 text-gray-600">A world where every family has financial security and peace of mind through our insurance services.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <ValuesIcon />
              <h2 className="text-2xl font-bold text-slate-700">Our Values</h2>
              <p className="mt-2 text-gray-600">Integrity, commitment, and excellence in delivering the best insurance solutions for our clients.</p>
            </div>
          </section>

          {/* --- Why Choose Us & Popular Plans --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <article>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Choose Us?</h2>
              <p className="text-gray-700 mb-4">
                We offer a variety of life insurance products catering to different needs, including endowment plans, term insurance, pension plans, and ULIPs. With our vast network, we ensure services are accessible to all.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-2">✔</span> Over six decades of trust and excellence.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✔</span> Comprehensive plans tailored to individual needs.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✔</span> Strong claim settlement ratio ensuring security.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✔</span> Wide network of branches and agents.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">✔</span> Affordable premiums with multiple payment options.</li>
              </ul>
            </article>

            <article>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Popular Insurance Plans</h2>
              <p className="text-gray-700 mb-4">
                We provide multiple insurance plans catering to different financial goals. Some of the popular plans include:
              </p>
              <ul className="space-y-3 text-gray-700">
                  <li><strong>Jeevan Anand</strong> – A combination of endowment and whole life insurance.</li>
                  <li><strong>Jeevan Umang</strong> – A life-long income plan with insurance coverage.</li>
                  <li><strong>Tech Term</strong> – A pure term insurance plan with affordable premiums.</li>
                  <li><strong>New Endowment Plan</strong> – A policy offering savings and life cover benefits.</li>
                  <li><strong>Pension Plans</strong> – Secure retirement plans ensuring a steady income.</li>
              </ul>
            </article>
          </section>
          
          {/* --- Contact Section --- */}
          <section className="mt-20 text-center max-w-3xl mx-auto bg-blue-50 p-10 rounded-lg">
            <h2 className="text-3xl font-bold text-slate-800">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-700">
              For more details about our insurance plans and policies, visit the nearest branch or contact an authorized agent. You can also explore plans and get a free quote online.
            </p>
             <button className="mt-6 bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
                Contact Us
              </button>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
