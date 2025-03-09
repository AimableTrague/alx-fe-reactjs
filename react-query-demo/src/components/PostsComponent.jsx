import React from 'react'
import { useQuery } from '@tanstack/react-query'

// Rename the function to `fetchPosts` as requested
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('fetchData', fetchPosts)

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error fetching Posts</div>

  return (
    <div>
      {data.map((item) => {
        return <div key={item.userId}>{item.title}</div>
      })}

      {/* Button to manually trigger a refetch */}
      <button onClick={() => refetch()}>Refetch Posts</button>
    </div>
  )
}

export default PostsComponent;
