import React, { useState } from 'react'

function ProductCard({product, addToCart}) {
    const [quantity, setQuantity] = useState(1)

    const handleIncrement = () => {
        setQuantity(prev => prev +1)
    }

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1
        setQuantity(value > 0 ? value : 1)
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setQuantity(1)
    }

    return (
        <div className='product-card'>
         <img 
          src={product.image}
          alt={product.title}
          className='product-image'/>
          <h3 className='product-title'>{product.title}</h3>
          <p className='product-price'>${product.price.toFixed(2)}</p>
          <div className='quantity-control'>
            <button onClick={handleDecrement} className='quantity-btn'>-</button>
            <input 
             type="number"
             min='1'
             value={quantity}
             onChange={handleQuantityChange}
             className='quantity-input' />
            <button onClick={handleIncrement} className='quantity-btn'>+</button>
          </div>
          <button onClick={handleAddToCart} className='add-to-cart-btn'>Add to Cart</button>
        </div>

    )
}
 export default ProductCard

