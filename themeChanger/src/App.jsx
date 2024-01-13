import React, {useEffect, useState} from "react"
import { ThemeProvider } from "./theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {
  const [theme,setTheme]=useState('light')
  const darkMode=()=>{
    setTheme('dark')
  }
  const lightMode=()=>{
    setTheme('light')
  }
  useEffect(() => {
    if (theme ==='dark' ){
      document.querySelector('html').classList.remove('light')
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
      document.querySelector('html').classList.add('light')
    }


  }, [theme])
  
  return (
    <ThemeProvider value={{theme,lightMode,darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {<ThemeBtn/>} 
          </div>

          <div className="w-full max-w-sm mx-auto">
            {<Card/>} 
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
