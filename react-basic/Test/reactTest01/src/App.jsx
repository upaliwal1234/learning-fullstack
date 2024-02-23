import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Blogs from './Components/Blogs'
import NewBlog from './Components/NewBlog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/new' element={<NewBlog />} />
        <Route path='/blogs/success' element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
