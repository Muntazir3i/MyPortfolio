import React from 'react'
import { GithubCircle, Linkedin, } from 'iconoir-react';
import { AtSymbolIcon } from '@heroicons/react/24/solid'
import './about.css'


function About() {
  return (
    <main
    // style={{height:'90%'}}
     class="h-custom-height md:h-screen min-w-0 flex-1 overflow-auto text-white p-4">
        <h1 className='text-7xl font-medium'>SELF-SU<span className='text-red-500'>MM</span>ARY</h1>
    <div className='mt-5 flex flex-col md:flex-row flex-wrap gap-4 '>
        <div className="bg-diagonal-lines name-intro md:w-3/5 border-solid border border-gray-800 px-7 py-5 rounded-2xl flex flex-col justify-center gap-3">
            <h2 className='text-4xl font-bold'><span className='text-red-500'>M</span>ohammad <span className='text-red-500'>M</span>untazir</h2>
            <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto praesentium, aspernatur accusamus quaerat commodi ab fuga. Tempora illo rem itaque earum hic, obcaecati, corrupti ducimus blanditiis sed incidunt non natus.</p>
        </div>
        <div className='bg-diagonal-lines name-intro md:w-1/3 border-solid border border-gray-800 p-9 rounded-2xl flex flex-col gap-3'>
        <h3 className='font-bold'>EXPERIENCE</h3>
        <div className='mt-2'>
            <p className='text-gray-500 font-medium'>2024 - Present</p>
            <p className='mt-1 text-lg font-medium'>Freelance Developer</p>
            {/* <p className='text-gray-400 text-sm'>MDOT</p> */}
        </div>
        <div className='mt-3'>
        <p className='text-gray-500 font-medium'>2023 - 2024</p>
            <p className='mt-1 text-lg font-medium'>Senior Code Instructor</p>
            <p className='text-gray-400 text-sm'>ILS Srinagar</p>
        </div>
        </div>
        <div className='bg-diagonal-lines name-intro md:w-1/3 border-solid border border-gray-800 p-9 rounded-2xl flex flex-col gap-3'>
        <h3 className='font-bold'>EDUCATION</h3>
        <div className='mt-2'>
            <p className='text-gray-500 font-medium'>2021 - 2024</p>
            <p className='mt-1 text-lg font-medium'>Bachelor In Computer Application</p>
            <p className='text-gray-400 text-sm'>University of Kashmir</p>
        </div>
        <div className='mt-3'>
        <p className='text-gray-500 font-medium'>2004 - 2019</p>
            <p className='mt-1 text-lg font-medium'>Higher Secondary & Secondary School </p>
            <p className='text-gray-400 text-sm'>Tyndale Biscoe School</p>
        </div>
        </div>
        <div className="bg-diagonal-lines name-intro md:w-3/5 border-solid border border-gray-800 px-7 py-9 rounded-2xl flex flex-col justify-center">
        <p className='text-gray-500 font-medium'>Stay with me</p>
            <h2 className='text-4xl font-bold'>Profile</h2>
            <div className='flex gap-8 mt-4'>
            <a target="_blank" href="https://github.com/Muntazir3i"><GithubCircle height={66} width={66} className=' hover:text-red-500 hover:scale-125 transition-transform duration-300'></GithubCircle></a>
            <a target="_blank" href="https://www.linkedin.com/in/mohammad-muntazir-5471572a1/"><Linkedin height={66} width={66}  className=' hover:text-red-500 hover:scale-125 transition-transform duration-300'></Linkedin></a>
            <a target="_blank" href="mailto:mohammadmuntazir20@yahoo.com"><AtSymbolIcon className='size-16  hover:text-red-500 hover:scale-125 transition-transform duration-300'></AtSymbolIcon></a>
            </div>
        </div>
        <div
        className="bg-diagonal-lines md:w-custom-width name-intro border-solid border border-gray-800 px-7 py-9 rounded-2xl flex flex-col justify-center gap-6">
            <h2 className='text-4xl font-bold'>Tech Stack</h2>
            <div className="flex flex-wrap justify-between devicon-container">
            
            <img
            className='w-10 md:w-20 hover:scale-125 transition-transform duration-300'
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
             <img
             className=' w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
             <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <img  className='w-10 md:w-20 hover:scale-125 transition-transform duration-300'src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg" />
            <img className='w-10 md:w-20hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <img className='w-10 md:w-20hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            </div>
            
        </div>
        
    </div>    
    </main>
  )
}

export default About