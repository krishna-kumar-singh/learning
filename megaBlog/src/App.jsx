import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from './store/authSlice'
import { Header,Footer } from "./component/index"
import {Outlet} from 'react-router-dom'
function App() {
  
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-white">
      <div className=" w-full block">
        <Header/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App

