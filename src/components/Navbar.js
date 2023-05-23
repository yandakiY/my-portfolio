import React from 'react'

const Navbar = ({handleView , view}) => {
  return (
    <nav className='flex items-center justify-between'>
        {/* Logo part */}
        <span className='cursor-pointer bg-gray-700 text-white text-2xl rounded-xl p-4 font-bold'>
            Yandaki.dev
        </span>

        {/* Link part */}
        <ul className='hidden md:flex items-center text-xl'>
            <li className='cursor-pointer p-4 text-gray-700 font-bold border-black hover:border-b-2'>Home</li>
            <li className='cursor-pointer p-4 text-gray-700 font-bold border-black hover:border-b-2'>About</li>
            <li className='cursor-pointer p-4 text-gray-700 font-bold border-black hover:border-b-2'>Projects</li>
            <li className='cursor-pointer p-4 text-gray-700 font-bold border-black hover:border-b-2'>Contacts</li>
        </ul>

        {/* Menu part - if width is small */}
        <div className="md:hidden flex">
            {view ? <i onClick={handleView} className="fa-solid fa-xmark cursor-pointer"></i> : <i onClick={handleView} className="fa-solid fa-bars cursor-pointer"></i>}
        </div>
    </nav>
  )
}

export default Navbar