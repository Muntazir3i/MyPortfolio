import React from 'react'
import {Outlet} from 'react-router-dom'
import SideBar from './Components/SideBar'
import { ThemeProvider } from './Components/context/ThemeSwitch'
import { useState } from 'react'

function Layout() {
    let [dark,setDark] = useState(false)
    const toggleDark = ()=>setDark((prevVal)=> !prevVal)

  return (
    <ThemeProvider value={{dark,setDark,toggleDark}}>
    <div class="flex h-screen">
    <SideBar></SideBar>
    <Outlet></Outlet>
    </div>
    </ThemeProvider>
  )
}

export default Layout