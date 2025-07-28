import Wrapper from './Wrapper'
import { useParams, useNavigate } from 'react-router-dom'
import { menu_items } from './menu_context'
import Checkbox_Extras from '../Form Comps/Checkbox_Extras'
import Detail_Order_Button from '../Form Comps/Detail_Order_Button'
import { Formik, Form, Field } from 'formik'
import React, { useState, useEffect, useRef } from 'react'
import Quantity_Button from '../Form Comps/Quantity_Button'
import Add_To_Cart_Alert from '../Alert Comps/Add_To_Cart'
import ClearCartButton from '../Form Comps/Clear_Cart_Button'
import RemoveItemButton from '../Form Comps/Remove_Item_Button'

const Menu_Item_Detail = () => {
  const { itemName } = useParams()
  const menuItem = menu_items.find(item => item.url === itemName)
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(0)
  const [pendingItems, setPendingItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem('pendingItems')
      return storedItems ? JSON.parse(storedItems) : []
    } catch (error) {
      console.error("Error parsing stored pending items from local storage:", error)
      return []
    }
  })


  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const storedItems = localStorage.getItem('pendingItems')
        setPendingItems(storedItems ? JSON.parse(storedItems) : [])
      } catch (error) {
        console.error("Error parsing stored pending items from local storage:", error)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    handleStorageChange()

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const storedItems = localStorage.getItem('pendingItems')
        setPendingItems(storedItems ? JSON.parse(storedItems) : [])
      } catch (error) {
        console.error("Error parsing stored pending items from local storage:", error)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  const [quantityAlertMessage, setQuantityAlertMessage] = useState('')
  const [quantityAlertType, setQuantityAlertType] = useState('')
  const formikRef = useRef(null)


  useEffect(() => {
    if (formikRef.current) {
      const { values, setFieldValue } = formikRef.current
      const hasDynamicExtras = values.selectedExtras.some(extra => extra !== 'No Extras')
      const allDynamicExtrasSelected = menuItem.extras.every(extra => values.selectedExtras.includes(extra.name_of_extra))

      switch (true) {
        case allDynamicExtrasSelected:
          console.log(true)
          break
        case hasDynamicExtras && values.selectedExtras.includes('No Extras'):

          setFieldValue('selectedExtras', values.selectedExtras.filter(extra => extra !== 'No Extras'))
          break
        case !hasDynamicExtras && values.selectedExtras.length > 0 && !values.selectedExtras.includes('No Extras'):

          break
        case values.selectedExtras.length === 0:

          setFieldValue('selectedExtras', ['No Extras'])
          break
        default:
          break
      }
    }
  }, [formikRef.current?.values.selectedExtras])

const handleQuantityChange = (newQuantity) => {
  setQuantity(newQuantity)
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
                                innerRef={formikRef}
                                initialValues={{ selectedExtras: ['No Extras'] }}
                                onSubmit={(values, { resetForm }) => {
                                    console.log(values)
                                    setQuantity(1)
                                    resetForm()
                                }}
                            >
                                {({ values, resetForm, setFieldValue }) => (
                                    <Form>
                    <ul>
                      <li className="font-p text-black">
                        <label className='w-full h-[60px] py-4 flex flex-row-reverse justify-between align-middle'>
                          <Field
                            type="checkbox"
                            name='selectedExtras'
                            value='No Extras'
                            checked={values.selectedExtras.includes('No Extras')}
                            onChange={(e) => {
                              console.log(`No Extras checkbox changed: ${e.target.checked}`)
                              console.log(`Current extras before change:`, values.selectedExtras)
                              if (e.target.checked) {
                                setFieldValue('selectedExtras', ['No Extras'])
                              } else {
                                setFieldValue('selectedExtras', [])
                              }
                              console.log(`New extras after change:`, values.selectedExtras)
                            }}
                          />
                            <span className='flex flex-row w-[22rem] justify-between'>
                              <p className='font-p font-semibold text-black'>{'No Extras'}</p>
                              <div className='w-[2rem]'><p className='font-p font-semibold text-black'>$0.00</p></div>
                            </span>
                    </label>
                    </li>
                      {menuItem.extras.map((extra, index) => (
                          <li key={index} className="font-p text-black">
                                <Checkbox_Extras
                                  label={extra.name_of_extra}
                                  value={extra.name_of_extra}
                                  price={extra.price_of_extra}
                                  name="selectedExtras"
                                  checked={values.selectedExtras.includes(extra.name_of_extra)}
                                  onChange={(e) => {
                                    const newExtras = [...values.selectedExtras]
                                    const extraName = extra.name_of_extra
                                    const isChecked = e.target.checked

                                    console.log(`Checkbox changed: ${extraName}, checked: ${isChecked}`)
                                    console.log(`Current extras before change:`, newExtras)

                                    if (isChecked) {

                                      const noExtrasIndex = newExtras.indexOf('No Extras')
                                      if (noExtrasIndex !== -1) {
                                        newExtras.splice(noExtrasIndex, 1)
                                      }


                                      if (!newExtras.includes(extraName)) {
                                        newExtras.push(extraName)
                                      }
                                    } else {
                                      const extraIndex = newExtras.indexOf(extraName)
                                      if (extraIndex !== -1) {
                                        newExtras.splice(extraIndex, 1)
                                      }

                                      const hasDynamicExtras = newExtras.some(extra => extra !== 'No Extras')
                                      if (!hasDynamicExtras) {

                                        const noExtrasIndex = newExtras.indexOf('No Extras')
                                        if (noExtrasIndex !== -1) {
                                          newExtras.splice(noExtrasIndex, 1)
                                        }
                                        newExtras.push('No Extras')
                                      }
                                    }

                                    console.log(`New extras after change:`, newExtras)
                                    setFieldValue('selectedExtras', newExtras)
                                  }}
                              />
                            </li>
                        ))}
                    </ul>
                                      <div className="flex flex-row w-full justify-between items-center">
                                          <span className="flex justify-between w-[10rem]">
                                          <Quantity_Button
                                              onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                                              label='-'
                                          />
                                          <span className="font-p text-black text-[18pt]">{quantity}</span>
                                          <Quantity_Button
                                              onClick={() => handleQuantityChange(quantity + 1)}
                                              label='+'
                                          />
                                          </span>
                                            <Detail_Order_Button
                                              label='Add to Order'
                                              orderItem={{
                                                  name: menuItem.name,
                                                  price: parseFloat(menuItem.price),
                                                  extras: values.selectedExtras.map(extraName => {
                                                      const extra = menuItem.extras.find(e => e.name_of_extra === extraName)
                                                      return extra ? { name: extra.name_of_extra, price: parseFloat(extra.price_of_extra) } : null
                                                  }).filter(Boolean),
                                                  quantity: quantity
                                              }}
                                              onOrderAdded={() => {
                                                  setQuantity(0)
                                                  resetForm()
                                              }}
                                              setQuantityAlertMessage={setQuantityAlertMessage}
                                              setQuantityAlertType={setQuantityAlertType}
                                          />
                                      </div>
                                  </Form>
                              )}
                          </Formik>
                      </div>
                    )}
                </div>
            </div>
    <div className="mt-5">
        <h3 className="font-display text-black font-semibold text-[24pt]">Pending Items</h3>
        <div className="flex justify-between items-center mb-4">
            <ClearCartButton
              label='Clear Pending Items'
              onClick={() => {
              localStorage.removeItem('pendingItems')
              setPendingItems([])
              setQuantity(0)
            }} />
            <button
              onClick={() => {
                const pendingItems = JSON.parse(localStorage.getItem('pendingItems')) || []
                const cartItems = JSON.parse(localStorage.getItem('cartItemArray')) || []
                cartItems.push(...pendingItems)
                localStorage.setItem('cartItemArray', JSON.stringify(cartItems))
                localStorage.removeItem('pendingItems')
                setPendingItems([])
                setQuantityAlertMessage('Items moved to cart!')
                setQuantityAlertType('success')
                setTimeout(() => {
                  setQuantityAlertMessage('')
                  setQuantityAlertType('')
                  navigate('/cart')
                }, 1000)
              }}
              className="bg-gold rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
                  hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:bg-light_orange disabled:cursor-not-allowed transition ease-in-out duration-450"
            >
              Move All to Cart
            </button>
        </div>
        {pendingItems.length === 0 ? (
            <p className="font-p text-black">No pending items</p>
        ) : (
            <ul>
                {pendingItems.map((item, index) => (
                    <li key={index} className="font-p text-black py-4 flex justify-between items-center border-b border-gray-200">
                        <div>
                            <p className="font-p text-black font-semibold">{item.name}</p>
                            {item.extras && item.extras.length > 0 && (
                                <ul className="ml-4">
                                    {item.extras.map((extra, extraIndex) => (
                                        <li key={extraIndex} className="font-p text-black text-sm">
                                            {extra.name} - ${extra.price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <RemoveItemButton onClick={() => {
                            const updatedPendingItems = [...pendingItems]
                            updatedPendingItems.splice(index, 1)
                            setPendingItems(updatedPendingItems)
                            localStorage.setItem('pendingItems', JSON.stringify(updatedPendingItems))
                        }} />
                    </li>
                ))}
            </ul>
        )}
    </div>

        </Wrapper>
        <Add_To_Cart_Alert message={quantityAlertMessage} type={quantityAlertType} duration={5000} />

    </div>
    </>

  )
}

export default Menu_Item_Detail
