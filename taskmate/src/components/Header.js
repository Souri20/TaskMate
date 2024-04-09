import React from 'react'
import logo from '../Assets/logo_taskmate.png.svg'


function Header() {
  return (
    <header>
        <div className="log">
            <img src={logo} alt='' />
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span className='light'></span>
            <span className='medium'></span>
            <span className='dark'></span>
            <span className='gOne'></span>
            <span className='gTwo'></span>
            <span className='gThree'></span>
        </div>
    </header>
  )
}

export default Header
