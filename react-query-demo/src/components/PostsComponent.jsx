import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}

const PostsComponent = () => {
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    refetch 
  } = useQuery(
    'fetchData', 
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 10,  // Data stays in cache for 10 minutes
      staleTime: 1000 * 60 * 5,   // Data is considered fresh for 5 minutes
      refetchOnWindowFocus: true, // Refetch data when window regains focus
      keepPreviousData: true      // Keep previous data while new data is fetched
    }
  )

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
