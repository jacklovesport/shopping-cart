import { Link } from 'react-router-dom'

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
                <button className='checkout-button'>checkout</button> 
            </div>       
        </nav>
    )
}

export default Navbar