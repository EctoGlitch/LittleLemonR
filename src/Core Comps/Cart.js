import React from 'react'
import { useCart } from './cart_context'
import Wrapper from './Wrapper'
import ClearCartButton from '../Form Comps/Clear_Cart_Button'
import RemoveItemButton from '../Form Comps/Remove_Item_Button'

import * as menu from './menu_context'
import Carousel from './Carousel'
import Order_Card from './Order_Card'

const Cart = () => {
    const { items, removeItem } = useCart()

    const sortMenu = ()  => {
                const filtered = menu.menu_items
                const filteredLength = filtered.length
                return { filtered, filteredLength }
            }

        const menu_more = sortMenu().filtered
        const len_more = sortMenu().filteredLength

    return (
        <div className='bg-white'>
            <Wrapper>
                <h1 className="font-display text-black font-semibold text-[48pt] py-5">Your Cart</h1>
                <div className="">
                            <p className="text-black font-p font-black my-5 uppercase">Add More To Your Order!</p>
                            <Carousel id="more">
                                <div className="grid gap-4"
                                        style={{gridTemplateColumns: `repeat(${len_more}, minmax(440px, 1fr))`}}>
                                        { menu_more.map(item => (
                                            <Order_Card
                                                key={item.name}
                                                img={item.img_src}
                                                name={item.name}
                                                price={item.price}
                                                description={item.description}
                                                alt={item.name}
                                                img_src={item.img_src}
                                                url={item.url}
                                            />
                                        )) }
                            </div>
                        </Carousel>
                    </div>

                {items.length === 0 ? (
                    <p className="font-p py-20 text-black">Your cart is empty.</p>
                ) : (
                    <>
                        <p className='font-p font-bold text-[18pt] text-black'>Order Summary</p>
                        <ul>
                            {items.map((item, index) => {
                                const itemPrice = typeof item.price === 'number' ? item.price : 0
                                const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1 // Default to 1 if quantity is not a number
                                const totalExtraPricePerItem = item.extras ? item.extras.reduce((sum, extra) => sum + (typeof extra.price === 'number' ? extra.price : 0), 0) : 0
                                const totalPriceForItem = (itemPrice + totalExtraPricePerItem) * itemQuantity
                                return (
                                    <li key={index} className="font-p text-black py-2 border-b border-gray-200 flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{item.name} x {item.quantity} - ${totalPriceForItem.toFixed(2)}</p>
                                            {item.extras && item.extras.length > 0 && (
                                                <ul className="pl-4 text-sm">
                                                    {item.extras.map((extra, extraIndex) => (
                                                        <li key={extraIndex}>
                                                            {extra.name} (+${extra.price.toFixed(2)})
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <RemoveItemButton onClick={() => removeItem(index)} />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="py-5">
                            <p className="font-p font-bold text-[20pt] text-black text-right">
                                Total: ${
                                    items.reduce((total, item) => {
                                        const itemPrice = typeof item.price === 'number' ? item.price : 0
                                        const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1
                                        const totalExtraPricePerItem = item.extras ? item.extras.reduce((sum, extra) => sum + (typeof extra.price === 'number' ? extra.price : 0), 0) : 0
                                        return total + (itemPrice + totalExtraPricePerItem) * itemQuantity
                                    }, 0).toFixed(2)
                                }
                            </p>
                            <ClearCartButton />
                        </div>
                    </>
                )}
            </Wrapper>
        </div>
    )
}

export default Cart
