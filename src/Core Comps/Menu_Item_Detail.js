import Wrapper from './Wrapper'
import { useParams } from 'react-router-dom'
import { menu_items } from './menu_context'
import Checkbox_Extras from '../Form Comps/Checkbox_Extras'
import Detail_Order_Button from '../Form Comps/Detail_Order_Button'
import { Formik, Form } from 'formik'
import React, { useState } from 'react'
import Quantity_Button from '../Form Comps/Quantity_Button'
import Add_To_Cart_Alert from '../Alert Comps/Add_To_Cart'

const Menu_Item_Detail = () => {
  const { itemName } = useParams()
  const menuItem = menu_items.find(item => item.url === itemName)
  const [quantity, setQuantity] = useState(1)
  const [quantityAlertMessage, setQuantityAlertMessage] = useState('')
  const [quantityAlertType, setQuantityAlertType] = useState('')

  const handleQuantityChange = (newQuantity, currentSelectedExtras) => {
    setQuantity(newQuantity)
    let message = ''
    let type = ''

    if (newQuantity > 0) {
      const extrasText = currentSelectedExtras.length > 0 ? `\nExtras: ${currentSelectedExtras.join(', ')}` : ''
      message = `Dish: ${menuItem.name}\nQuantity: ${newQuantity}${extrasText}`
      type = 'info'
    } else {
      message = 'Quantity cannot be less than 1'
      type = 'error'
    }
    setQuantityAlertMessage(message)
    setQuantityAlertType(type)

    setTimeout(() => {
      setQuantityAlertMessage('')
      setQuantityAlertType('')
    }, 5000)
  }

  if (!menuItem) {
    return (
    <div className='bg-white'>
      <Wrapper>
        <h2>Menu Item Not Found</h2>
      </Wrapper>
    </div>
    )
  }

  return (
    <>
    <div className='bg-white'>
        <Wrapper>
            <h1 className="font-display text-black font-semibold text-[48pt] py-5">{menuItem.category}: {menuItem.name}</h1>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 items-stretch">
                <div className="flex-grow">
                    <img src={menuItem.img_src} alt={menuItem.name} className='w-hero-width h-full rounded-4xl object-cover' />
                </div>
                <div className=''>
                    <p className="font-p font-semibold text-black ">{menuItem.description}</p>
                    <p className="font-p font-semibold text-light_orange text-right text-[18pt] py-5">Price: ${menuItem.price}</p>
                    {menuItem.extras && menuItem.extras.length > 0 && (
                        <div className="py-5">
                            <h3 className="font-p text-black font-semibold text-[24pt]">Extras:</h3>
                            <Formik
                                initialValues={{ selectedExtras: [] }}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values)
                                    setQuantity(1)
                                    resetForm()
                                }}
                            >
                                {({ values, resetForm }) => (
                                    <Form>
                                        <ul>
                                            {menuItem.extras.map((extra, index) => (
                                                <li key={index} className="font-p text-black">
                                                    <Checkbox_Extras
                                                        label={extra.name_of_extra}
                                                        value={extra.name_of_extra}
                                                        price={extra.price_of_extra}
                                                        name="selectedExtras"
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-row w-full justify-between items-center"> 
                                            <span className="flex justify-between w-[10rem]">
                                                <Quantity_Button 
                                                    onClick={() => handleQuantityChange(Math.max(1, quantity - 1), values.selectedExtras)}
                                                    label='-'
                                                />
                                                <span className="font-p text-black text-[18pt]">{quantity}</span>
                                                <Quantity_Button  
                                                    onClick={() => handleQuantityChange(quantity + 1, values.selectedExtras)}
                                                    label='+'
                                                />
                                            </span>
                                            <Detail_Order_Button
                                                label='Add to Order'
                                                orderItem={{
                                                    name: menuItem.name,
                                                    price: parseFloat(menuItem.price), // Ensure price is a number
                                                    extras: values.selectedExtras.map(extraName => {
                                                        const extra = menuItem.extras.find(e => e.name_of_extra === extraName)
                                                        return extra ? { name: extra.name_of_extra, price: parseFloat(extra.price_of_extra) } : null // Ensure extra price is a number
                                                    }).filter(Boolean),
                                                    quantity: quantity
                                                }}
                                                onOrderAdded={() => {
                                                    setQuantity(0)
                                                    resetForm()
                                                }}
                                            />
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
        <Add_To_Cart_Alert message={quantityAlertMessage} type={quantityAlertType} duration={5000} />
    </div>
    </>

  )
}

export default Menu_Item_Detail
