import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-indigo-800 bg-opacity-90 text-white p-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jeevan Saathi</h1>
          <ul className="flex gap-6">
            <li><Link to={"/"}><a className="hover:text-yellow-400">Home</a></Link></li>
            <li><Link to={"/Plans"}><a className="hover:text-yellow-400">Plans</a></Link></li>
            <li><Link to={"/About"}><a className="hover:text-yellow-400">About</a></Link></li>
            <li><Link to={"/Contact"}><a className="hover:text-yellow-400">Contact</a></Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;