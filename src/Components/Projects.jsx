import React, { useState } from 'react'
import useTheme from './context/ThemeSwitch';
import { GithubCircle} from 'iconoir-react';


function Projects() {
  let {dark,setDark,toggleDark} = useTheme();

  return (
    
    <main className= {`min-w-0 h-screen flex justify-center items-center flex-1 overflow-auto p-4 text-white ${dark ? 'bg-black' : 'bg-customWhite'}`}>
      
       <a target="_blank" href="https://github.com/Muntazir3i"><GithubCircle height={66} width={66} className={` hover:scale-125 transition-transform duration-300 ${dark ? 'text-white hover:text-red-500' : 'text-black hover:text-customText'}`}></GithubCircle></a>
      </main>
  )
}

export default Projects