
const SearchInput = ({query,setQuery}) => {
  return (
    <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search posts..' className='w-full border px-4 rounded-md' />
  )
}

export default SearchInput
