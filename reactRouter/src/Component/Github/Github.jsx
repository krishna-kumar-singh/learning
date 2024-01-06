import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//   const [data,setData]=useState([])
//   useEffect(()=>{fetch("https://api.github.com/users/kkrishna")
//   .then(Response=> Response.json()).then(
//     (data)=>{
//       console.log(data);
//       console.log(data.followers);
//       setData(data)
//     }
//   )
// },[])
  const data = useLoaderData()
  return (
    <>
    <div className=' text-white m-4 text-center bg-gray-500  text-lg'>Github follower:  {data.followers}</div>
    <img src={data.avatar_url} alt="" />
    </>
  )
}

export default Github
export const github=async ()=>{
   const response =await fetch("https://api.github.com/users/kkrishna")
  return response.json()
}