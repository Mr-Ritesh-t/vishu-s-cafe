import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cafeCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart");
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('cafeCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // A unique cart item key is composed of its ID and its selected size
    const uniqueId = product.size ? `${product.id}-${product.size}` : `${product.id}`;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        (item.size ? `${item.id}-${item.size}` : `${item.id}`) === uniqueId
      );
      if (existingItem) {
        return prevItems.map(item =>
          (item.size ? `${item.id}-${item.size}` : `${item.id}`) === uniqueId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, uniqueId }];
    });
  };

  const removeFromCart = (uniqueId) => {
    setCartItems(prevItems => prevItems.filter(item => 
      (item.size ? `${item.id}-${item.size}` : `${item.id}`) !== uniqueId
    ));
  };

  const updateQuantity = (uniqueId, delta) => {
    setCartItems(prevItems => prevItems.map(item => {
      const itemUniqueId = item.size ? `${item.id}-${item.size}` : `${item.id}`;
      if (itemUniqueId === uniqueId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
