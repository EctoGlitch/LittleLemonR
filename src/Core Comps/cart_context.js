import React, { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        try {
            const storedItems = localStorage.getItem('cartItemArray')
            return storedItems ? JSON.parse(storedItems) : []
        } catch (error) {
            console.error("Error parsing stored items from local storage:", error)
            return []
        }
    })

    const [alertMessage, setAlertMessage] = useState('')
    const [alertType, setAlertType] = useState('')

    useEffect(() => {
        try {
            localStorage.setItem('cartItemArray', JSON.stringify(items))
            console.log('Cart items saved to local storage:', items)
        } catch (error) {
            console.error("Error saving cart items to local storage:", error)
        }
    }, [items])

    const triggerAlert = (message, type) => {
        setAlertMessage(message)
        setAlertType(type)
        setTimeout(() => {
            setAlertMessage('')
            setAlertType('')
        }, 6000)
    }

const addItem = (itemsToAdd) => {
    setItems(prevItems => {
        let updatedItems = [...prevItems]
        const itemsArray = Array.isArray(itemsToAdd) ? itemsToAdd : [itemsToAdd]
        itemsArray.forEach(item => {
            if (item && item.name) {
                updatedItems.push(item)
            }
        })
        console.log('New item(s) added to cart state:', itemsArray, 'Updated cart items:', updatedItems)
        if (itemsArray.length > 0 && itemsArray[0] && itemsArray[0].name) {
            triggerAlert(`${itemsArray[0].name} added to cart!`, 'success')
        } else {
            triggerAlert('No items added to cart!', 'info')
        }
        return updatedItems
    })
}

    const removeItem = (indexToRemove) => {
        setItems(prevItems => {
            const updatedItems = prevItems.filter((_, index) => index !== indexToRemove)
            console.log('Item removed from cart state. Updated cart items:', updatedItems)
            triggerAlert('Item removed from cart!', 'info')
            return updatedItems
        })
    }

    const clearCart = () => {
        setItems([])
        localStorage.removeItem('cartItemArray')
    }

    return (
        <CartContext.Provider value={{ items, setItems, addItem, removeItem, clearCart, alertMessage, alertType }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
