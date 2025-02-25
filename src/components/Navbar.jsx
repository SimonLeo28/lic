import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-indigo-800 bg-opacity-90 text-white p-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LifeSecure</h1>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/Plans" className="hover:text-yellow-400">Plans</a></li>
            <li><a href="/About" className="hover:text-yellow-400">About</a></li>
            <li><a href="/Contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;