import React from 'react'
import { GithubCircle, Linkedin, } from 'iconoir-react';
import { AtSymbolIcon } from '@heroicons/react/24/solid'
import './about.css'
import useTheme from './context/ThemeSwitch';



function About() {
    let {dark,setDark,toggleDark} = useTheme();
  return (
    <main
     class={`h-[90vh] md:h-screen min-w-0 flex-1 overflow-auto text-white p-4 ${dark ? 'bg-black' : 'bg-customWhite'}`}>
        <h1 className= {`text-7xl font-medium ${dark ? 'text-white' : 'text-black'} `}>SELF-SU<span className={`${dark ? 'text-red-500' : 'text-customText'}`}>MM</span>ARY</h1>
    <div className='  mt-5 flex flex-col md:flex-row flex-wrap gap-4 '>
        <div className= {`name-intro md:w-3/5  px-7 py-5 rounded-2xl flex flex-col justify-center gap-3 ${dark ? 'bg-diagonal-lines border-solid border border-gray-800 ' : 'bg-white'} `}>
            <h2 className= {`text-4xl font-bold ${dark ? 'text-white' : 'text-black'}`}><span className={`${dark ? 'text-red-500' : 'text-customText'}`}>M</span>ohammad <span className={`${dark ? 'text-red-500' : 'text-customText'}`}>M</span>untazir</h2>
            <p className= {`font-light  ${dark ? 'text-white' : 'text-black'}`}>Tinkering with computers since I was a kid, breaking 'em just to learn how to fix 'em. I write code like it's poetry, but don’t get it twisted, I’m here to build, break, and rebuild better. I think in Web, hustle in lines of JavaScript, For me, it’s not just about the code—it’s about making the system work for me. Every project I touch? It’s got my signature, raw and unapologetic.</p>
        </div>
        <div className={`name-intro md:w-1/3 px-7 py-5 rounded-2xl flex flex-col justify-center gap-3 ${dark ? 'bg-diagonal-lines border-solid border border-gray-800 ' : 'bg-white'} `}>
        <h3 className={`font-bold ${dark ? 'text-white' : 'text-black'}`}>EXPERIENCE</h3>
        <div className='mt-2'>
            <p className='text-gray-500 font-medium'>2023 - Present</p>
            <p className={`mt-1 text-lg font-medium ${dark ? 'text-white' : 'text-customText'}`}>Freelance Developer</p>
            {/* <p className='text-gray-400 text-sm'>MDOT</p> */}
        </div>
        <div className='mt-3'>
        <p className='text-gray-500 font-medium'>Mar 2024 - Nov 2024</p>
            <p className={`mt-1 text-lg font-medium ${dark ? 'text-white' : 'text-customText'}`}>Senior Code Instructor</p>
            <p className='text-gray-400 text-sm'>ILS Srinagar</p>
        </div>
        </div>
        <div className={`name-intro md:w-1/3 px-7 py-5 rounded-2xl flex flex-col justify-center gap-3 ${dark ? 'bg-diagonal-lines border-solid border border-gray-800 ' : 'bg-white'} `}>
        <h3 className={`font-bold ${dark ? 'text-white' : 'text-black'}`}>EDUCATION</h3>
        <div className='mt-2'>
            <p className='text-gray-500 font-medium'>2021 - 2024</p>
            <p className= {`mt-1 text-lg font-medium ${dark ? 'text-white' : 'text-customText'}`}>Bachelor In Computer Application</p>
            <p className='text-gray-400 text-sm'>University of Kashmir</p>
        </div>
        <div className='mt-3'>
        <p className='text-gray-500 font-medium'>2004 - 2019</p>
            <p className={`mt-1 text-lg font-medium ${dark ? 'text-white' : 'text-customText'}`}>Higher Secondary & Secondary School </p>
            <p className='text-gray-400 text-sm'>Tyndale Biscoe School</p>
        </div>
        </div>
        <div className={`name-intro md:w-3/5  px-7 py-5 rounded-2xl flex flex-col justify-center gap-3 ${dark ? 'bg-diagonal-lines border-solid border border-gray-800 ' : 'bg-white'} `}>
        <p className='text-gray-500 font-medium'>Stay with me</p>
            <h2 className={`font-bold text-4xl ${dark ? 'text-white' : 'text-black'}`}>Profile</h2>
            <div className='flex gap-8 mt-4'>
            <a target="_blank" href="https://github.com/Muntazir3i"><GithubCircle height={66} width={66} className={` hover:scale-125 transition-transform duration-300 ${dark ? 'text-white hover:text-red-500' : 'text-black hover:text-customText'}`}></GithubCircle></a>
            <a target="_blank" href="https://www.linkedin.com/in/mohammad-muntazir-5471572a1/"><Linkedin height={66} width={66}  className={` hover:scale-125 transition-transform duration-300 ${dark ? 'text-white hover:text-red-500' : 'text-black hover:text-customText'}`}></Linkedin></a>
            <a target="_blank" href="mailto:mohammadmuntazir5@gmail.com"><AtSymbolIcon className={` size-16  hover:scale-125 transition-transform duration-300 ${dark ? 'text-white hover:text-red-500' : 'text-black hover:text-customText'}`}></AtSymbolIcon></a>
            </div>
        </div>
        <div
        className={`name-intro  md:w-custom-width px-7 py-5 rounded-2xl flex flex-col justify-center gap-3 ${dark ? 'bg-diagonal-lines border-solid border border-gray-800 ' : 'bg-white'} `}>
           
            <h2 className={`font-bold text-4xl ${dark ? 'text-white' : 'text-black'}`}>Tech Stack</h2>
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
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
            <img className='w-10 md:w-20 hover:scale-125 transition-transform duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
            </div>
            
        </div>
        
    </div>    
    </main>
  )
}

export default About