import { useState } from 'react'
import './App.css'


function App() {
  let [count,counter]=useState(0)
  const increment = ()=>{
    count+=1
    counter(count)
    console.log('clicked increment',count)
  }
  const decrement=()=>{
    if (count>0){
    count-=1
    counter(count)
    console.log('clicked decrement',count)
    }
  }
  return (
    <>
    <h2>Count is {count}</h2>
    <button onClick={increment}>
      increse
    </button>
    <br />
    <button onClick={decrement}>
      decrease
    </button>
    </>
  )
}

export default App
