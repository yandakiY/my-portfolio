import React from 'react'

const NavbarSmall = ({ view }) => {
    return (
        <div className='md:hidden block'>
            {view &&
                <div className=' m-2'>
                    <ul className='p-1 text-gray-700 text-lg font-bold'>
                        <li className='cursor-pointer m-2 px-2 border-2'>Home</li>
                        <li className='cursor-pointer m-2 px-2 border-2'>About</li>
                        <li className='cursor-pointer m-2 px-2 border-2'>Projects</li>
                        <li className='cursor-pointer m-2 px-2 border-2'>Contacts</li>
                    </ul>
                </div>}
        </div>
    )
}

export default NavbarSmall