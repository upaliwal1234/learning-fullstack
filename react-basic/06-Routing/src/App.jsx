// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Nav() {
  let navigate = useNavigate();

  function handleEvent1() {
    // window.location.href = "/dashboard";
    navigate('/dashboard');

  }

  function handleEvent2() {
    // location.href = "products";
    navigate('/products');
  }
  return (
    <nav style={{ backgroundColor: 'orchid', color: 'white' }}>
      <h1>I am a navbar</h1>
      <button onClick={handleEvent1}>Dashboard</button>
      <button onClick={handleEvent2}>Products</button>
    </nav>
  )
}

export default App