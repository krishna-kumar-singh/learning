import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid}= useParams()
  return (
    <div className=' py-9 px-5  flex bg-gray-300'>User : {userid}</div>
  )
}

export default User