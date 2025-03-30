import { fetchUserData } from './services/githubService';
import AppFile from './components/App';
import { BrowserRouter as Route, Routes, Router, RouterProvider, BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <>  
      <AppFile />
    </>
  )
}

export default App
