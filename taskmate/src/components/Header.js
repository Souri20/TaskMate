import React from 'react'
import logo from '../Assets/logo_taskmate.png.svg'
import { useState, useEffect } from 'react'


function Header() {
const [theme, setTheme] = useState('gOne')

useEffect(()=> {
  document.documentElement.removeAttribute("class")
  document.documentElement.classList.add(theme)
}, [theme])

  return (
    <header>
        <div className="log">
            <img src={logo} alt='' />
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span onClick={()=>setTheme("gOne")} className={ theme ==='gOne'? 'gOne activeTheme' :'gOne'}></span>
            <span onClick={()=>setTheme("light")} className={ theme ==='light'? 'light activeTheme' :'light'}></span>
            <span onClick={()=>setTheme("gTwo")} className={ theme ==='gTwo'? 'gTwo activeTheme' : 'gTwo'}></span>
            <span onClick={()=>setTheme("medium")} className={ theme ==='medium'? 'medium activeTheme' : 'medium'}></span>
            <span onClick={()=>setTheme("dark")} className={theme ==='dark'? 'dark activeTheme' : 'dark'}></span>
            <span onClick={()=>setTheme("gThree")} className={theme ==='gThree'? 'gThree activeTheme' :'gThree'}></span>
        </div>
    </header>
  )
}

export default Header
