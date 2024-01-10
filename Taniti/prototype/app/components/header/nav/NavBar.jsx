import React from 'react'
import Nav from './Nav'
import Logo from './Logo'

const NavBar = () => {
  return (
    <div className='flex justify-between mb-10 pb-2 nav-shadow sticky w-full'>
      <Logo />
      <Nav />
    </div>
  )
}

export default NavBar
