import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
      <nav className="container flex justify-between items-center rounded-2xl py-2 px-3 hidden md:flex z-50 shadow-2xl">
        <div>
            <h1 className='text-4xl font-extrabold'> <span className=' text-red-500'>Z</span>aptro</h1>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
            <input type="search" placeholder='Search ...' className='px-3 py-2 rounded-3xl cursor-pointer' />
        </div>
        <div><button className='bg-yellow-100 py-2 px-3 rounded-2xl cursor-pointer '>Sign UP</button>
        </div>
      </nav>
    );
}

export default Navbar
