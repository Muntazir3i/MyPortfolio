import React, { useState } from 'react'
import useTheme from './context/ThemeSwitch';


function Projects() {
  let {dark,setDark,toggleDark} = useTheme();

  return (
    
    <main className= {`min-w-0 flex-1 overflow-auto p-4 text-white ${dark ? 'bg-black' : 'bg-customWhite'}`}>
      Projects
      <button
      onClick={toggleDark}
      className='border-solid border border-white'>Dark</button>
      </main>
  )
}

export default Projects