import { useEffect, useState } from 'react'

import './App.css'
import SearchInput from './components/SearchInput'
import SuggestionsList from './components/SuggestionsList'

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
      <SearchInput query={query} setQuery={setQuery} />
      <SuggestionsList filteredPost={filteredPostgit} />
      
    </div>
  )
}

export default App
