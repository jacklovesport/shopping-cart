import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Navbar({ cartItemCount }) {
    return (
        <nav className="navbar">
            <div className="logo">sellingAllsorts</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Products</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className='cart-container'>
                <div className='cart-icon'>
                🛒 <span className="cart-count">{cartItemCount}</span>
                </div>
                <Link to ='/checkout' className='checkout-btn'>Checkout</Link> 
            </div>       
        </nav>
    )
}

export default Navbar

Navbar.propTypes = {
    cartItemCount: PropTypes.number.isRequired
  };
  