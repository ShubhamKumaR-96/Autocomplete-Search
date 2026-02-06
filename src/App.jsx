import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [query,setQuery]=useState("")
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchpost=async()=>{
      try {
      const response=await fetch('https://dummyjson.com/posts')
      const data=await response.json()
      setPosts(data.posts)
      }
      catch(err) {
         console.log("error while fetch data from post:", err)
      }
    }
    fetchpost()
  },[])

  const filteredPost=posts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
  
  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1>Welcome to Autocomplete search bar</h1>
      <input type={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search posts..' className='w-full border px-4 rounded-md' />
      <div className='border mt-2 rounded-xl '>
         {filteredPost.map(post=>(
          <div className='px-4 py-2 border-b' key={post.id}>{post.title}</div>
         ))}
      </div>
    </div>
  )
}

export default App
