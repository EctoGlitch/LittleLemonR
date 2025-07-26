import React from 'react'
import { useCart } from '../Core Comps/cart_context'

const Detail_Order_Button = ({ label, orderItem, onOrderAdded }) => {
    const { addItem } = useCart()

    const addToLocalStorage = () => {
        console.log('Detail_Order_Button props - orderItem:', orderItem)
        const { quantity, ...baseItem } = orderItem
        const itemsToAdd = []
        for (let i = 0; i < quantity; i++) {
            const itemCopy = JSON.parse(JSON.stringify(baseItem))
            itemsToAdd.push(itemCopy)
        }
        addItem(itemsToAdd)
        if (onOrderAdded) {
            onOrderAdded()
        }
    }
    return (
        <>
            <button type='submit' onClick={addToLocalStorage} className=" bg-gold rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
                hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:bg-light_orange disabled:cursor-not-allowed transition ease-in-out duration-450 justify-self-end">
                { label }
            </button>
        </>
    )
}
export default Detail_Order_Button
