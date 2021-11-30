import './App.css';
import Navbar from './components/UI/Navbar';
import Home from '././components/Home';
import About from "././components/About";
import Products from "././components/Products";
import Cart from "././components/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (<BrowserRouter>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  </BrowserRouter>)

}

export default App;
