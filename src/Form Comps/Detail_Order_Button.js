import React from 'react'
import { useCart } from '../Core Comps/cart_context'

const Detail_Order_Button = ({ label, orderItem, onOrderAdded, setQuantityAlertMessage, setQuantityAlertType }) => {
    const { addItem } = useCart()

const addToLocalStorage = (event) => {
    event.preventDefault()

    const itemsToAdd = []


    for (let i = 0; i < orderItem.quantity; i++) {
        itemsToAdd.push({
            name: orderItem.name,
            price: orderItem.price,
            extras: orderItem.extras.map(extra => ({
                name: extra.name,
                price: extra.price
            }))
        })
    }

    const pendingItems = JSON.parse(localStorage.getItem('pendingItems')) || []
    pendingItems.push(...itemsToAdd)
    localStorage.setItem('pendingItems', JSON.stringify(pendingItems))

    setQuantityAlertMessage(`${orderItem.name} added to pending items`)
    setQuantityAlertType('success')

    setTimeout(() => {
        setQuantityAlertMessage('')
        setQuantityAlertType('')
    }, 5000)

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
