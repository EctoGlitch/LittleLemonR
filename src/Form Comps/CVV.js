import { useState, useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'
import creditCardIcon_white from '../Img/icons_assets/creditcard.svg'
import creditCardIcon_green from '../Img/icons_assets/creditcard.svg' // Assuming green version is also creditcard.svg or similar

const CVV_Input = ({ label, name, touched, error, 'aria-label': ariaLabel, 'aria-invalid': ariaInvalid, 'aria-describedby': ariaDescribedBy }) => {
    const { setFieldValue, values } = useFormikContext()
    const [displayValue, setDisplayValue] = useState('')

    useEffect(() => {
        setDisplayValue(values[name] || '')
    }, [values[name]])

    const handleCVVChange = (e) => {
        const inputValue = e.target.value
        const pureDigits = inputValue.replace(/[^\d]/g, '')
        const truncatedDigits = pureDigits.slice(0, 3)

        setFieldValue(name, truncatedDigits)
        setDisplayValue(truncatedDigits)
    }

    const isPlaceholder = !displayValue
    const imageSrc = isPlaceholder ? creditCardIcon_green : creditCardIcon_white
    const textColorClass = isPlaceholder ? 'text-black' : 'text-white'
    const bgColorClass = isPlaceholder ? 'bg-[#fff]' : 'bg-dark_green'

    return (
        <>
            <div className='w-full flex flex-col'>
                <label className='font-p text-black font-bold py-3'>{ label }</label>
                <div className={`w-full h-[80px] relative font-p py-6 rounded-4xl focus:outline-black appearance-none text-center flex items-center justify-between px-4 ${textColorClass} ${bgColorClass}`}>
                    <img
                        src={imageSrc}
                        alt="Credit Card Icon"
                        className="w-6 h-6 block"
                    />
                    <Field
                        className={`flex-grow bg-transparent outline-none text-center ${textColorClass}`}
                        type="text"
                        name={name}
                        placeholder={label}
                        inputMode="numeric"
                        maxLength="3"
                        value={displayValue}
                        onChange={handleCVVChange}
                        aria-label={ariaLabel || label}
                    />
                </div>
                {touched && error ? (
                    <div className='h-10 text-red-700 py-4' id={`${name}-error`}>
                        <ErrorMessage className='error font-p font-semibold' name={ name } component="div" />
                    </div>) : (
                    <div className='h-10 text-red-700 py-4'></div>
                    )
                }
            </div>
        </>
        
    )
}
export default CVV_Input
