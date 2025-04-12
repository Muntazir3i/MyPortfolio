import React from 'react'
import useTheme from './context/ThemeSwitch';
import './card.css'

function Card({title,desp,link}) {
    let {dark,setDark,toggleDark} = useTheme();
  return (
    <a href={link} id='card-link' className={`block p-6 mb-3   rounded-lg shadow ${dark ? 'bg-diagonal-lines' : 'bg-white'}`}>

<h5 className={`mb-2 text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>{title}</h5>
<p className={`font-normal ${dark ? 'text-white' : 'text-black'}`}>{desp}</p>
</a>
  )
}

export default Card