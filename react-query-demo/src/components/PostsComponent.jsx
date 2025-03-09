import React from 'react'
import { useQuery } from 'react-query'

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

const PostsComponent = () => {
    const { data, error, isLoading, refetch } = useQuery('fetchData', fetchData, {
        staleTime: 5 * 60 * 1000,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error fetching Posts</div>

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Data</button>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostsComponent;
