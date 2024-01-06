import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import User from './Component/User/User'
import Github, { github } from './Component/Github/Github'


// const router = createBrowserRouter([
//   {path:'/',
//   element:<Layout/>
//   ,children:[
//     {path:'',
//     element:<Home/>
//     },
//     {
//       path:'about',
//       element:<About/>
//     },
//     {path:'contact',
//     element:<Contact/>
//     }
//   ]
//   }

// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={github} path='github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
