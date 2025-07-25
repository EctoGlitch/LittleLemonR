import React from 'react';
import { useCart } from '../Core Comps/cart_context';

const Order_Button = ({ label, name, price}) => {
    const { addItem } = useCart();

    const addToLocalStorage = () => {
        console.log('Order_Button props - name:', name, 'price:', price);
        addItem(
            {
                'name' : name,
                'price' : price
            }
        )
    }
    return (
        <>
            <button type='submit' onClick={addToLocalStorage} className="z-10 top-4 right-4 absolute bg-gold rounded-full text-black font-p w-9 h-9 drop-shadow-md
        hover:bg-white hover:font-semibold active:bg-light_green active:text-white  transition ease-in-out duration-450 ">
                { label }
            </button>
        </>
    )
}
export default Order_Button
