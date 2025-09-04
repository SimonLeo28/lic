import React from 'react'
import hero from '../images/darkenedhero.jpg'
import aboutimg from '../images/about.jpg'
import Navbar1 from '../components/Navbar1'

export const Edit = () => {

  const Plans = [
    {
        title: "Endowment Plans",
        description: "Endowment plans offer a combination of savings and protection.",
    },
    {
        title: "Money Back Plans",
        description: "Provides periodic payments while ensuring life cover.",
    },
    {
        title: "Term Assurance Plans",
        description: "High coverage at affordable premiums.",
    },
    {
        title: "Pension Plans",
        description: "Ensuring a secure post-retirement life.",
    },
    {
        title: "ULIPs",
        description: "Combining investment with life cover.",
    },
  ]
  return (
    <>
    <div
    className='bg-cover'
     >
        {/* Nav Section
        <div className='flex justify-between bg-blue'>
            <h1 className='text-lg text-white p-5'>JeevanShanthi Insurance</h1>
            <ul className='flex gap-5 p-5'>
                <li className='text-lg text-white font-bold'>Home</li>
                <li className='text-lg text-white font-bold'>About</li>
                <li className='text-lg text-white font-bold'>Plans</li>
                <li className='text-lg text-white font-bold'>Contact</li>
            </ul>
        </div> 
        */}

        {/* Hero Section */}
        <div
        style={{ backgroundImage: `url(${hero})` }}
        className='bg-cover '>
            {/* <div className='flex justify-between bg-blue'>
            <h1 className='text-lg text-white p-5'>JeevanShanthi Insurance</h1>
            <ul className='flex gap-5 p-5'>
                <li className='text-lg text-white font-bold'>Home</li>
                <li className='text-lg text-white font-bold'>About</li>
                <li className='text-lg text-white font-bold'>Plans</li>
                <li className='text-lg text-white font-bold'>Contact</li>
            </ul>
        </div>  */}
        <Navbar1 />
            <div className='flex p-5 flex-col gap-3 justify-center items-center h-screen'>
            <h1 className=' lg:text-5xl text-white flex justify-center items-center md:p-4 text-3xl items-center justify-center'>WELCOME TO JEEVAN SHANTHI</h1>
            <p className='text-1xl text-white flex justify-center items-center'>Protecting your future, securing your peace of mind.</p>
            <div className='p-5 flex gap-10'>
                <button className='p-3 text-white font-semibold hover:text-black bg-transparent hover:bg-white rounded-lg transition-transform transform hover:scale-110'>Learn More</button>
                <button className='p-3 text-white font-semibold hover:text-black bg-transparent hover:bg-white rounded-lg transition-transform transform hover:scale-110'>Browse our plans</button>
            </div>
            </div>
        </div>

        {/* About Section */}
        <div className='lg:flex w-screen flex-col gap-10 p-10 justify-center items-center'>
            <h1 className='text-3xl'>ABOUT INSURANCE IN BANGLORE</h1>
            <div className='lg:flex gap-10 justify-center items-center md:flex-col'>
                <img src={aboutimg} className='lg:w-[25%] md:w-[25%]' />
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-3xl'>Our Mission</h1>
                    <p className='text-justify flex justify-center items-center'>At Jeevan Saathi, our mission is to provide comprehensive insurance<br />
                    solutions tailored to your needs. We believe in empowering our clients with<br />
                    the knowledge and resources necessary to make informed decisions about their<br />
                    insurance coverage.
                    </p>
                </div>
            </div>
        </div>

        {/** Plans Part */}
        <div className='grid lg:grid-cols-3 justify-center items-center gap-5 md:grid-cols-2'>
            {Plans.map((plan,index) => (
                <div
                className='p-5 bg-white border-3 h-fit w-fit rounded-sm bg-black flex-col justify-center items-center border-gray-600'                
                key={index}>
                    <h1>{plan.title}</h1>
                    <h3>{plan.description}</h3>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
