import React, {useEffect,useState}from 'react'
import service from '../appwrite/config'
import { Container,PostCard } from '../component'

function AllPost() {
    const [posts,setposts]=useState([])
    // error aayega
    useEffect(()=>{},[])
    service.getPosts([]).then((value)=> {
        if (value){
            setposts(value.documents)
        }
    })
  return (
    <div className='w-full py-8'>
       <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div  key={post.$id} className='w-1/4 p-2'>
                    <PostCard {...post}/>
                </div>
            ))}
        </div>
       </Container>
    </div>
  )
}

export default AllPost