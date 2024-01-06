import {React,useState} from 'react'

import './App.css'



function App() {
  let [colour,counter]=useState('olive')
  const changer=(color)=>{
    colour=color
    counter(colour)
  }
  return (
    <div className=" w-full h-screen duration-200" style={{backgroundColor:colour}}>
      <div className="fixed flex flex-wrap bottom-10 justify-center inset-x-0 px-2 ">
        <div className="flex flex-wrap shadow-xl justify-center  bg-white gap-10 px-4 py-2 rounded-3xl">
          <button className="outline-none px-4 py-2 rounded-full text-white" style={{backgroundColor:'red'}} onClick={()=>{changer('red')}}>
            Red
          </button>
          <button className="outline-none px-4 py-2 rounded-full text-white" style={{backgroundColor:'green'}} onClick={()=>{changer('green')}}>
            Green
          </button>
          <button className="outline-none px-4 py-2 rounded-full text-white" style={{backgroundColor:'blue'}} onClick={()=>{changer('blue')}}>
            Blue
          </button>
          <button className=" px-4 py-2 rounded-full text-black" style={{backgroundColor:'white', border:'1px black solid'}} onClick={()=>{changer('white')}}>
            White
          </button>
          <button className="outline-none px-4 py-2 rounded-full text-white" style={{backgroundColor:'violet'}} onClick={()=>{changer('violet')}}>
            Violet
          </button>
          <button className="outline-none px-4 py-2 rounded-full text-black" style={{backgroundColor:'yellow'}}  onClick={()=>{changer('yellow')}}>
            Yellow
          </button>
          <button className="outline-none px-4 py-2 rounded-full text-white" style={{backgroundColor:'orange'}}  onClick={()=>{changer('orange')}}>
            Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
