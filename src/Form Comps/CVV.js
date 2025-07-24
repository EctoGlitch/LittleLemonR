import { useState, useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const CVV_Input = ({ label, name, touched, error }) => {
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

    return (
        <>
            <div className='w-full flex flex-col'>
                <label className='font-p text-black font-bold py-3'>{ label }</label>
                <Field
                    className='font-p text-black h-[80px] p-6 rounded-4xl'
                    type="text"
                    name={name}
                    placeholder={label}
                    inputMode="numeric"
                    maxLength="3"
                    value={displayValue}
                    onChange={handleCVVChange}
                />
                {touched && error ? (
                    <div className='h-10 text-red-700 py-4'>
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
