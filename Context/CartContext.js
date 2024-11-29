// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to cart
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    return useContext(CartContext);
};
