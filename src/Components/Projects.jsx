import React, { useState } from 'react'
import useTheme from './context/ThemeSwitch';
import Card from './Card';


function Projects() {
  let {dark,setDark,toggleDark} = useTheme();

  return (
    
    <main className= {`min-w-0 h-custom-height-two md:h-screen h-screen flex-1 overflow-auto p-4 text-white ${dark ? 'bg-black' : 'bg-customWhite'}`}>
       <h1 className= {`text-7xl font-medium ${dark ? 'text-white' : 'text-black'} `}>PROJECTS</h1>
      <div className=' mt-5 w-full h-full flex flex-col gap-5'>
      <Card title = 'Habit Tracker' desp='A habit tracker app built with React, utilizing Context API for efficient global state management and Chart.js for interactive data visualization. It features reusable components, responsive design, and seamless performance, showcasing modern front-end development techniques. Ideal for tracking and analyzing habits with advanced tech integration.' link='https://muntazir3i.github.io/Habit-Tracker./' ></Card>
      <Card title='Movie Search' desp='A movie search app built with React, utilizing Context API for efficient state management and OMDB API for fetching movie details dynamically. It features reusable components, responsive design, and real-time search capabilities, demonstrating modern front-end techniques and API integration for seamless user experience. Clone the repo and use it locally' link='https://github.com/Muntazir3i/Movie-Search'></Card>
       </div>
      </main>
  )
}

export default Projects