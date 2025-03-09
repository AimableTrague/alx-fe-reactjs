import './App.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Ensure this import is correct
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Same here
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App
