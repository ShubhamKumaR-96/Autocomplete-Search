
const SuggestionsList = ({filteredPost}) => {
  return (
    <div className='border mt-2 rounded-xl '>
         {filteredPost.map(post=>(
          <div className='px-4 py-2 border-b' key={post.id}>{post.title}</div>
         ))}
      </div>
  )
}

export default SuggestionsList
