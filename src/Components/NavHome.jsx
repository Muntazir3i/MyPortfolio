import React from 'react'
import myimg from '../assets/myimg.jpeg'
import './navhome.css'
import useTheme from './context/ThemeSwitch'

function NavHome() {
  let {dark,setDark,toggleDark} = useTheme();

    const openResume = () => {
      const resumeUrl = '/MuntazirResume.pdf';  // link of pdf  
      window.open(resumeUrl, '_blank'); 

    };


  return (
      <main
      
      className={` h-[90vh] md:h-screen min-w-0 flex-1 flex overflow-auto p-4 ${dark ? 'bg-black text-white' : 'bg-customWhite text-black'}`}>
      <div 
      // style={{height:'80%'}}
      className='flex flex-col md:items-center md:justify-center  md:flex-row md:gap-6 '>
            <div
            className=' md:w-1/3 flex items-center justify-center'>
            <img 
            id='main-img'
            className=' rounded-3xl md:h-5/5 md:w-full '
            src={myimg} alt="" />
            </div>
            <div 
            className='flex justify-center flex-col gap-8 md:gap-4 md:w-2/4 '
            >
                <h1 
                className= 'mt-5 md:mt-0 text-2xl text-center md:text-left md:text-2xl lg:text-3xl xl:text-4xl  '
                >Hey, I'm <span
                id='main-name'
                className={`${dark ? 'text-red-500 hover:text-white' : 'text-customText hover:text-black'}
                
                 ease-out duration-300
                 `}
                >Mohammad Muntazir</span></h1>
                <p
                className='text-center md:text-left md:text-sm lg:text-xl xl:text-2xl  font-medium '
                >
                    <span
                    className='text-xl md:text-2xl xl:text-4xl font-bold'
                    >Full-stack Developer</span>
                   </p>
    
                   <p className='text-center md:text-left text-lg '>
                   <span className={`${dark ? 'text-red-500' : 'text-customText'} font-bold`}>Frontend Engineer</span> using HTML, CSS, JavaScript,  React, and Nextjs. <span className={`${dark ? 'text-red-500' : 'text-customText'} font-bold`}>Backend </span>using Node, Express, MongoDb, Postgres & Prisma and Deploy. Can assist to build robust web, mobile, and desktop applications.
                   </p>
                   <button
                   onClick={openResume}
                   className={`lg:w-1/4 mt-4 mb-3 rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg   hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${dark ? 'text-white hover:bg-white hover:text-red-500' : 'text-black hover:bg-white hover:text-customText'}`} type="button">
      Open Resume
    </button>
            </div>
    
        </div>
      </main>
  )
}

export default NavHome