import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import PropTypes from 'prop-types';


function Shop ({ addToCart }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if(!response.ok) {
                throw new Error('Network down.')
            }
            return response.json()
        })
        .then (data => {
            setProducts(data)
            setLoading(false)
        })
        .catch(error => {
            setError('Failed to fetch products. Please try again later.');
            setLoading(false);
            console.error('Error fetching products:', error);
        })
    }, [])
    if (loading) {
        return <div className="loading">Loading products...</div>;
      }
    
      if (error) {
        return <div className="error">{error}</div>;
      }
    
      return (
        <div className="shop">
          <h1>Shop Products</h1>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>
      );
}

export default Shop

Shop.propTypes = {
  addToCart: PropTypes.func.isRequired
};
