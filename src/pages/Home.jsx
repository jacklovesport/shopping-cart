function Home() {
    return (
        <div className='home'>
            <h1>JacksOnestop</h1>
           <div className='home-content'>
            <div className="featured-image">
                <img 
                  src="/api/placeholder/800/400" 
                  alt="featured" 
                  className="banner-image" 
                />
              </div>
              <div className="welcome-text">
                <h2>Shop the best products</h2>
                <p>
                  Explore our collection of high-quality items at great prices.
                  We deliver worldwide with fast shipping and easy returns.
                </p>
              </div>
              <div className="info-section">
                <div className="info-card">
                  <h3>Quality Products</h3>
                  <p>All our products are carefully selected for quality and durability.</p>
                </div>
                <div className="info-card">
                  <h3>Fast Delivery</h3>
                  <p>We ship all orders within 24 hours of purchase.</p>
                </div>
                <div className="info-card">
                  <h3>Easy Returns</h3>
                  <p>Not satisfied? Return within 30 days for a full refund.</p>
                </div>
           </div>
        </div>
        </div>
    )
}

export default Home