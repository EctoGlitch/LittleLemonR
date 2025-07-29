import React, { useState, useCallback, useEffect } from 'react'
import { useCart } from './cart_context'
import Wrapper from './Wrapper'
import ClearCartButton from '../Form Comps/Clear_Cart_Button'
import RemoveItemButton from '../Form Comps/Remove_Item_Button'
import Button from '../Form Comps/Button'
import Billing from './Billing'
import { useNavigate } from 'react-router-dom'
import { Standalone_Drop_Down } from '../Form Comps/Drop_Down'
import { durations } from './Drop_Down_Context'
import green_bike from '../Img/icons_assets/bike_green.png'
import black_bike from '../Img/icons_assets/bike_black.png'

import * as menu from './menu_context'
import Carousel from './Carousel'
import Order_Card from './Order_Card'

const Cart = () => {
    const navigate = useNavigate()
    const { items, removeItem, clearCart } = useCart()
    const [showBilling, setShowBilling] = useState(false)
    const [billingData, setBillingData] = useState({})
    const [finalFormData, setFinalFormData] = useState({})
    const [showWrapper, setShowWrapper] = useState(true)

    const sortMenu = ()  => {
                const filtered = menu.menu_items
                const filteredLength = filtered.length
                return { filtered, filteredLength }
            }

        const menu_more = sortMenu().filtered
        const len_more = sortMenu().filteredLength

    const handleContinueToBilling = useCallback(() => {
        setShowBilling(true)
        setShowWrapper(false)
    }, [])

    const handleGoBackToCart = useCallback((data) => {
        setBillingData(data)
        setShowBilling(false)
        setShowWrapper(true)
    }, [])

    const handleFinalSubmit = useCallback((billingValues) => {
        const combinedData = { cartItems: items, ...billingValues }
        setFinalFormData(combinedData)
        console.log('Final Combined Order Data:', combinedData)

        clearCart()
        setBillingData({})
        setShowBilling(false)
        setTimeout(() => {
            navigate('/PaymentSuccess')
        }, 1000)
    }, [items, clearCart, navigate])

    useEffect(() => {
        console.log('Cart items updated:', items)
    }, [items])

    const [selectedValue, setSelectedValue] = useState('')

    const handleDropdownChange = (value) => {
        setSelectedValue(value)
    }

    return (
        <div className='bg-white'>
            {showWrapper && !showBilling && (
                <Wrapper id='more'>
                    <div className='flex justify-between items-center h-[80px] py-24'>
                        <div className='flex items-center h-[80px] my-auto'>
                            <img className='w-6 h-6 mx-3' src={green_bike} alt='green bike' />
                            <p className='font-p flex items-center text-base h-[80px] leading-3'>
                            <strong>Standard Delivery Time:</strong> 20 minutes
                            </p>
                        </div>
                        <div className='w-[20rem] flex items-center'>
                            <Standalone_Drop_Down
                            label="Select an option"
                            name="location"
                            options={durations}
                            img_defualt={black_bike}
                            img_active={black_bike}
                            img_w="w-6"
                            img_h="h-6"
                            value={selectedValue}
                            onChange={handleDropdownChange}
                            className="flex items-center h-[80px]"
                            />
                        </div>
                        </div>

                    <hr/>
                    <div>
                        <label className='text-black font-black font-p '>Cutlery</label>
                        <div className='flex justify-between items-center'>
                            <label className='text-black font-semibold font-p my-5' for="cutlery">Help reduce plastic waste. Only ask for cutlery if you need it.</label>
                            <input type="checkbox" name="cutlery" value={false}></input>
                        </div>
                    </div>
                    <hr/>

                    <h1 className="font-display text-black font-semibold text-[48pt] py-5">Cart</h1>
                    <div >
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
                </Wrapper>
            )}
            {showWrapper && !showBilling ? (
                items.length === 0 ? (
                    <Wrapper><p className="font-p py-20 text-black">Your cart is empty.</p></Wrapper>

                    ) : (
                        <>
                        <Wrapper>
                            <p className='font-p font-bold text-[18pt] text-black'>Order Summary</p>
                            <ul>
                                {items.map((item, index) => {
                                    const itemPrice = typeof item.price === 'number' ? item.price : 0
                                    const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1
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
                                <p className="font-p font-bold text-[18pt] text-black text-right">
                                    Subtotal: ${
                                        items.reduce((total, item) => {
                                            const itemPrice = typeof item.price === 'number' ? item.price : 0
                                            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1
                                            const totalExtraPricePerItem = item.extras ? item.extras.reduce((sum, extra) => sum + (typeof extra.price === 'number' ? extra.price : 0), 0) : 0
                                            return total + (itemPrice + totalExtraPricePerItem) * itemQuantity
                                        }, 0).toFixed(2)
                                    }
                                </p>
                                <p className="font-p text-[16pt] text-black text-right">
                                    Tax (10%): ${
                                        (items.reduce((total, item) => {
                                            const itemPrice = typeof item.price === 'number' ? item.price : 0
                                            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1
                                            const totalExtraPricePerItem = item.extras ? item.extras.reduce((sum, extra) => sum + (typeof extra.price === 'number' ? extra.price : 0), 0) : 0
                                            return total + (itemPrice + totalExtraPricePerItem) * itemQuantity
                                        }, 0) * 0.10).toFixed(2)
                                    }
                                </p>
                                <p className="font-p text-[16pt] text-black text-right">
                                    Delivery Fee: $5.00
                                </p>
                                <p className="font-p text-[16pt] text-black text-right">
                                    Service Fee: $3.00
                                </p>
                                <p className="font-p font-bold text-[20pt] text-black text-right">
                                    Total: ${
                                        (items.reduce((total, item) => {
                                            const itemPrice = typeof item.price === 'number' ? item.price : 0
                                            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1
                                            const totalExtraPricePerItem = item.extras ? item.extras.reduce((sum, extra) => sum + (typeof extra.price === 'number' ? extra.price : 0), 0) : 0
                                            return total + (itemPrice + totalExtraPricePerItem) * itemQuantity
                                        }, 0) * 1.10 + 5 + 3).toFixed(2)
                                    }
                                </p>
                                <div className='flex justify-between max-sm:flex-col max-sm:my-10'>
                                    <ClearCartButton
                                    label='Clear Cart'
                                    onClick={clearCart} />
                                <Button
                                    className="max-sm:my-10"
                                    label='Proceed to Payment'
                                    onClick={handleContinueToBilling}
                                />
                                </div>
                            </div>
                            </Wrapper>
                        </>
                    )
                ) : (
                    <Billing onGoBackToReservation={handleGoBackToCart} initialValues={billingData} onFinalSubmit={handleFinalSubmit} reservationFormValid={items.length > 0} backButtonLabel="Review Cart" />
                )}
        </div>
    )
}

export default Cart
