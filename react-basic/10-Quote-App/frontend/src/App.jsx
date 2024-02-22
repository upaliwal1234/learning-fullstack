import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import NewQuote from './Components/Quotes/NewQuote'
import Navbar from './Components/MainNavigation/Navbar'

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewQuote />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
