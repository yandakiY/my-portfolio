import React from 'react'
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall'

const Header = () => {

    const [viewSmallNav, setviewSmallNav] = React.useState(false)

    const handleviewSmallNav = () =>{
        setviewSmallNav(!viewSmallNav)
    }
  return (
    <header className='font-mono border m-2 p-4 bg-purple-50'>
        <Navbar handleView={handleviewSmallNav} view={viewSmallNav} />

        {/* Navbar si l'ecran est small */}
        <NavbarSmall view={viewSmallNav} />
    </header>
  )
}

export default Header