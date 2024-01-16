import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from './store/authSlice'
import { Header,Footer } from "./component/index"
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading]=useState(false)
  const dispatch= useDispatch()
  useEffect(()=>{
    authService.getAccountUser().then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    }).finally(()=> setLoading(false))
  },[])
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
      <div className=" w-full block">
        <Header/>
        <main>
          TODO <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): (
    <div>
      loading
    </div>
  )
}

export default App
