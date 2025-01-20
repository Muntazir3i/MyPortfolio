import React from 'react'
import useTheme from './context/ThemeSwitch';

function Blogs() {
  let {dark,setDark,toggleDark} = useTheme();
  return (
      <main className= {`min-w-0 h-screen flex justify-center items-center flex-1 overflow-auto p-4 text-white ${dark ? 'bg-black' : 'bg-customWhite'}`}>
          <h1 className= {`text-7xl font-medium ${dark ? 'text-white' : 'text-black'} `}>COMING SOON</h1>
          </main>
  )
}

export default Blogs