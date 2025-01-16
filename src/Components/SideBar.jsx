import React from 'react'
import { 	IdentificationIcon, HomeIcon ,	PresentationChartBarIcon, PencilIcon } from '@heroicons/react/24/solid'
import {Link, NavLink} from 'react-router-dom'

function SideBar() {
  return (
    <aside class="border-solid border-t border-slate-500 md:border-none  fixed bottom-0 w-full md:relative md:fixed md:top-0 md:left-0 md:w-32 p-4 flex justify-center items-center md:flex-col gap-5 ">

  
    <NavLink 
    to={'/'}  
    className={({ isActive }) => (isActive ? "text-white" : "text-red-500")}
    >
    {({ isActive }) => (
        <HomeIcon 
        className={`size-7 ${
            isActive ? "text-white" : "text-red-500"
        } hover:text-white  hover:scale-125 transition-transform duration-300`}
        />
    )}
    </NavLink>

    <NavLink 
    to={'/about'}  
    className={({ isActive }) => (isActive ? "text-white" : "text-red-500")}
    >
    {({ isActive }) => (
        <IdentificationIcon
        className={`size-7 ${
            isActive ? "text-white" : "text-red-500"
        } hover:text-white hover:scale-125 transition-transform duration-300`}
        />
    )}
    </NavLink>

    <NavLink 
    to={'/projects'}  
    className={({ isActive }) => (isActive ? "text-white" : "text-red-500")}
    >
    {({ isActive }) => (
        <PresentationChartBarIcon 
        className={`size-7 ${
            isActive ? "text-white" : "text-red-500"
        } hover:text-white hover:scale-125 transition-transform duration-300`}
        />
    )}
    </NavLink>

    <NavLink 
    to={'/blogs'}  
    className={({ isActive }) => (isActive ? "text-white" : "text-red-500")}
    >
    {({ isActive }) => (
        <PencilIcon 
        className={`size-7 ${
            isActive ? "text-white" : "text-red-500"
        } hover:text-white hover:scale-125 transition-transform duration-300`}
        />
    )}
    </NavLink>


  
 
  </aside>
  )
}

export default SideBar