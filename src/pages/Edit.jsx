import React from 'react'
import hero from '../images/darkenedhero.jpg'

export const Edit = () => {
  return (
    <>
    <div
    className='bg-cover'
     style={{ backgroundImage: `url(${hero})` }}>
        {/* Nav Section */}
        <div className='flex justify-between bg-transparent'>
            <h1 className='text-lg text-white p-5'>JeevanShanthi Insurance</h1>
            <ul className='flex gap-5 p-5'>
                <li className='text-lg text-white font-bold'>Home</li>
                <li className='text-lg text-white font-bold'>About</li>
                <li className='text-lg text-white font-bold'>Plans</li>
                <li className='text-lg text-white font-bold'>Contact</li>
            </ul>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col gap-3 justify-center items-center h-screen'>
            <h1 className=' text-5xl text-white'>WELCOME TO JEEVAN SHANTHI</h1>
            <p className='text-1xl text-white'>Protecting your future, securing your peace of mind.</p>
            <div className='p-5 flex gap-10'>
                <button className='p-5 text-white font-semibold hover:text-black bg-transparent hover:bg-white rounded-lg transition-transform transform hover:scale-110'>Learn More</button>
                <button className='p-5 text-white font-semibold hover:text-black bg-transparent hover:bg-white rounded-lg transition-transform transform hover:scale-110'>Browse our plans</button>
            </div>
        </div>
    </div>
    </>
  )
}
