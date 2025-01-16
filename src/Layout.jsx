import React from 'react'
import {Outlet} from 'react-router-dom'
import SideBar from './Components/SideBar'

function Layout() {
  return (
    <div class="flex h-screen">
    <SideBar></SideBar>
    <Outlet></Outlet>
    </div>
  )
}

export default Layout