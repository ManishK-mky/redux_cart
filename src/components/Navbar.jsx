import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    
  return (
    <div className='flex justify-between items-center py-4 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-gray-300 rounded px-3'>
      <h2 className='text-2xl font-semibold'>shopDO</h2>
      <ul className='flex gap-5'>
        <li>
            <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
        </li>
        <li>
            <NavLink to={'/cart'} className="text-black hover:text-gray-700 duration-300">Cart</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
