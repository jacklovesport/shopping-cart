import PropTypes from 'prop-types';

function Checkout({cart, removeProduct, totalPrice}) {

    return (
        <div>
            <h1>Here to checkout</h1>
            <h2>Total: £{(totalPrice).toFixed(2)}</h2>
                {cart.map(item => (
                    <div key={item.id} className='cart-card'>
                        <img src={item.image} alt={item.title} className='cart-card-img'/>
                        <div className='cart-card-details'>
                          <h3>{item.title}</h3>
                          <p>Price: £{item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                          <p>Total: £{(item.price * item.quantity).toFixed(2)}</p>
                          <button className='remove-btn'onClick={() => removeProduct(item.id)}>Remove</button>   
                        </div>
                    </div>
                )) }
        </div>
    )
    
}

export default Checkout

Checkout.propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
    removeProduct: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
  };
  