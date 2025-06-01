import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About'
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';


function App() {
  const [cart, setCart] = useState([])

  const removeProduct = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
          ? {...item, quantity: item.quantity + quantity}
          : item
         )
      } else {
        return [...prevCart, {...product, quantity}]
      }
    })
  }
  
const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity
}, 0)

  return (
    <Router>
      <div className='app'>
        <Navbar cartItemCount={cartItemCount}/>
        <div className='container'>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/checkout' element={<Checkout cart={cart} removeProduct={removeProduct} totalPrice={totalPrice}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App