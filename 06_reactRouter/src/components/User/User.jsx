import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() // userid name here is and should be same as defined in the routes in main.jsx
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User