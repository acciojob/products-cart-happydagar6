import React, { useState } from 'react';

// Product list based exactly on your mockup image
const productsList = [
  { id: 1, name: 'Samsung Galaxy Fold 4' },
  { id: 2, name: 'Iphone 14 Pro' },
  { id: 3, name: 'Pixel 5' },
  { id: 4, name: 'Mi note 6' },
  { id: 5, name: 'FireStick' },
  { id: 6, name: 'OnePlus Nord' }
];

const App = () => {
  // State to hold the items added to the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding items
  const handleAddToCart = (product) => {
    // Generate a unique key for the cart item so multiple of the same item can be added
    const newCartItem = {
      ...product,
      cartId: Date.now() + Math.random() 
    };
    setCart([...cart, newCartItem]);
  };

  // Function to handle removing items
  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>List of Products</h2>
      
      {/* REQUIRED CLASS: 'container' for the products grid */}
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        border: '1px solid black',
        maxWidth: '800px'
      }}>
        {productsList.map(product => (
          // REQUIRED CLASS: 'item' for each product card
          <div 
            className="item" 
            key={product.id}
            style={{ 
              border: '1px solid black', 
              backgroundColor: '#e6f4ff', 
              padding: '20px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px'
            }}
          >
            <p style={{ margin: '0 0 15px 0' }}>{product.name}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              style={{ 
                backgroundColor: '#5cb85c', 
                color: 'white', 
                padding: '8px 20px', 
                border: 'none', 
                cursor: 'pointer',
                borderRadius: '3px'
              }}
            >
              Add Item
            </button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      
      {/* REQUIRED CLASS: 'cart' for the cart section */}
      <div className="cart" style={{ maxWidth: '800px', marginTop: '20px' }}>
        {cart.length === 0 ? (
          // Exact required message in red when empty
          <p style={{ color: 'red' }}>There are no items in the cart</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cart.map(item => (
              <div 
                key={item.cartId} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span>{item.name}</span>
                <button 
                  onClick={() => handleRemoveFromCart(item.cartId)}
                  style={{ 
                    backgroundColor: '#5cb85c', 
                    color: 'white', 
                    padding: '8px 20px', 
                    border: 'none', 
                    cursor: 'pointer',
                    borderRadius: '3px'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default App;