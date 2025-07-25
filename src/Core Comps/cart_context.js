import React, { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        try {
            const storedItems = localStorage.getItem('cartItemArray')
            return storedItems ? JSON.parse(storedItems) : []
        } catch (error) {
            console.error("Error parsing stored items from local storage:", error)
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('cartItemArray', JSON.stringify(items))
            console.log('Cart items saved to local storage:', items)
        } catch (error) {
            console.error("Error saving cart items to local storage:", error)
        }
    }, [items])

    const addItem = (newItem) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems, newItem]
            console.log('Item added to cart state:', newItem, 'Updated cart items:', updatedItems)
            return updatedItems
        });
    };

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
