import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

const data = useLoaderData()


//const [data, setData] = useState([])
//useEffect(() => {
//  fetch ('https://api.github.com/users/Helios-snd')
//  .then( Response => Response.json())
//  .then (data => {
//   console.log(data);
//    setData(data)
//  })
//}, [])



  return (
    <div className=' text-center m-4 text-white p-4 text-3xl bg-slate-400'>Github folllowers: {data.followers}
    <img src={data.avatar_url} alt="Git Image" width={300}/>
     </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
   const Response = await fetch ('https://api.github.com/users/Helios-snd')
   return Response.json()
}