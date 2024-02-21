import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/usmanimaaz12')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])


  
  
    // Alternative way to fetch data 
// 1. useLoaderData() : it is a hook that is used to fetch the data from the loader function
// 2. useLoaderData() is used to get the data from the loader function
    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/usmanimaaz12')
    return response.json()
}