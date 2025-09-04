import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Link = ({ to, children, className }) => (
    <a href={to} className={className}>{children}</a>
);

// --- SVG Icons for Plan Cards ---
const IconWrapper = ({ children }) => <div className="bg-blue-100 text-blue-600 rounded-lg w-14 h-14 flex items-center justify-center">{children}</div>;
const EndowmentIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path><path d="M12 3v5.75A1.25 1.25 0 0 0 13.25 10H19"></path><path d="M10 15.5c.5-1 2-1 2 0s-1.5 1-2 0c-.5-1-2-1-2 0s1.5 1 2 0Z"></path></svg></IconWrapper>;
const MoneyBackIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></IconWrapper>;
const TermAssuranceIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></IconWrapper>;
const PensionIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v14"></path><path d="M18 14H6"></path><path d="M15 11h-1.5a1.5 1.5 0 0 0 0 3H15"></path><path d="M15 5H9"></path></svg></IconWrapper>;
const UlipIcon = () => <IconWrapper><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></IconWrapper>;


// --- Main Plans Component ---
const PlanCard = ({ icon, title, description, plans }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="p-8 flex-grow">
            {icon}
            <h3 className="text-2xl font-bold text-slate-800 mb-2 mt-5">{title}</h3>
            <p className="text-gray-600 mb-6 min-h-[48px]">{description}</p>
            <ul className="space-y-3">
                {plans.map((plan, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-blue-500 font-bold mr-3 mt-1">▪</span>
                        <span className="text-gray-700">{plan}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


export default function Plans() {
  const planData = [
    {
      icon: <EndowmentIcon />,
      title: "Endowment Plans",
      description: "A combination of savings and life protection.",
      plans: ["LIC Jeevan Anand: Offers dual benefits of savings and protection.", "LIC New Endowment Plan: A secure, savings-oriented plan."]
    },
    {
      icon: <MoneyBackIcon />,
      title: "Money Back Plans",
      description: "Provides periodic payments during the policy term.",
      plans: ["LIC New Money Back Plan – 20 Years: Periodic returns with life cover.", "LIC Jeevan Tarun: Specially designed for children’s financial security."]
    },
    {
      icon: <TermAssuranceIcon />,
      title: "Term Assurance",
      description: "High life coverage at very affordable premiums.",
      plans: ["LIC Tech Term: A pure risk cover plan with flexibility and options.", "LIC Jeevan Amar: A non-linked, protection-focused term plan."]
    },
    {
      icon: <PensionIcon />,
      title: "Pension Plans",
      description: "Ensures a financially secure post-retirement life.",
      plans: ["LIC Jeevan Shanti: An annuity plan with immediate and deferred options.", "LIC New Jeevan Nidhi: A pension plan that includes death cover benefits."]
    },
     {
      icon: <UlipIcon />,
      title: "ULIPs",
      description: "Combines market-linked investments with life cover.",
      plans: ["LIC Nivesh Plus: A single premium investment-linked plan.", "LIC SIIP: A systematic investment insurance plan (SIIP)."]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 pt-24 pb-16">
        <div className="container mx-auto px-6">

          <header className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              Our Insurance Plans
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Explore a range of plans offering comprehensive coverage for your financial security. From life insurance to pension plans, we have solutions tailored to meet your unique needs.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planData.map((category) => (
              <PlanCard key={category.title} {...category} />
            ))}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-8 text-center">
                 <h3 className="text-3xl font-bold mb-2">Need Help?</h3>
                 <p className="opacity-90 mb-6">Our experts are ready to help you find the perfect plan for your needs.</p>
                 <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-md">
                    Contact an Agent
                 </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

