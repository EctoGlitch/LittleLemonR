import React from 'react'
import { useCart } from '../Core Comps/cart_context'

const ClearCartButton = () => {
    const { setItems } = useCart()

    const handleClearCart = () => {
        localStorage.removeItem('cartItemArray')
        setItems([])
        console.log('Cart cleared from local storage and state.')
    }

    return (
        <button
            onClick={handleClearCart}
            className="bg-gold rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
                hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:bg-light_orange disabled:cursor-not-allowed transition ease-in-out duration-450"
        >
            Clear Cart
        </button>
    )
}

export default ClearCartButton
