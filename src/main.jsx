import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements ,RouterProvider,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import NavHome from './Components/NavHome.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Blogs from './Components/Blogs.jsx'





let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout/>}>
      <Route path = '' element= {<NavHome/>}/>
      <Route path = 'about' element= {<About/>}/>
      <Route path = 'projects' element= {<Projects/>}/>
      <Route path = 'blogs' element= {<Blogs/>}/>

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router = {router}/>
  </StrictMode>,
)
