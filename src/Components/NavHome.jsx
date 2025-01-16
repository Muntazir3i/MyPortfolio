import React from 'react'
import myimg from '../assets/myimg.jpeg'
import './navhome.css'

function NavHome() {
  return (
      <main
      style={{height:'90%'}}
      class="min-w-0 flex-1 overflow-auto p-4">
      <div className=' flex flex-col md:items-center md:justify-center   h-screen md:flex-row md:gap-6 '>
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
                className= 'text-white mt-5 md:mt-0 text-2xl text-center md:text-left md:text-2xl lg:text-3xl xl:text-4xl font-opensans '
                >Hey, I'm <span
                id='main-name'
                className='text-red-500
                font-bold
                hover:text-white ease-out duration-300
                 '
                >Mohammad Muntazir</span></h1>
                <p
                className='text-white text-center md:text-left md:text-sm lg:text-xl xl:text-2xl font-sourcecode font-light∏ '
                >
                    <span
                    className='text-xl md:text-2xl xl:text-4xl italic font-bold'
                    >Full-stack Developer</span>
                   </p>
    
                   <p className='text-white text-center md:text-left font-sourcecode text-lg '>
                   <span className='text-red-500 font-bold'>Frontend Engineer</span> using HTML, CSS, JavaScript,  React, and Nextjs. <span className='text-red-500 font-bold'>Backend </span>using Node, Express, SQL, Postgres & Prisma and Deploy. Can assist to build robust web, mobile, and desktop applications.
                   </p>
                   <button class="lg:w-1/4 mt-4 rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-red-500 hover:bg-white hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Open Resume
    </button>
            </div>
    
        </div>
      </main>
  )
}

export default NavHome