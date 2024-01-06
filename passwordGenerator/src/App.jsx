import {React, useState, useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [password,setPassword]=useState('Password')
  const [length,setlength]=useState(8)
  const [number,setNumber]=useState(false)
  const [char,setchar]=useState(false)

  const reference=useRef(null)
  const copyTextFromClipboard=useCallback(()=>{
    reference.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const randomPass=useCallback(()=>{
    let pass=''
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str+='1234567890'
    if (char) str+="!@#$%^&*()-=_+[]{}|;:',.<>/?"
   for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random() * str.length +1)
    pass+=str.charAt(char)
   }
   setPassword(pass)
  },[length,number,char,setPassword])
   

  useEffect(()=>{randomPass()}
  ,[length,number,char,setPassword])  

  return (
   <>
   <div className="w-full max-w-md mx-auto rounded-lg shadow-lg py-4 my-8 bg-gray-600 text-orange-500 text-2xl">
    <h1 className="text-white text-center my-2">Password Generator</h1>
    <div className="flex overflow-hidden shadow  rounded-lg">
      <input type='text' value={password} ref={reference} readOnly className="w-full outline-none px-2 py-2 "/>
      <button className='shrink-0 px-3 py-0.5 bg-blue-500 text-white' onClick={copyTextFromClipboard}>
        copy
      </button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex item-center gap-x-1">
        <input type='range' min={6} max={100} className="cursor-pointer" onChange={(e)=> {setlength(e.target.value)}}/>
        <label >length: {length}</label>
        <input type='checkbox' defaultValue={number} id="numberInput" onChange={()=>{setNumber((prev)=>!prev)}}/>
        <label >Number</label>
        <input type='checkbox' defaultValue={char} id='charInput' onChange={()=>{setchar((prev) => !prev)}}/>
        <label >Character</label>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
