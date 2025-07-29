import React, { useState, useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const CreditCardInput = ({ label, name, touched, error, 'aria-label': ariaLabel, 'aria-invalid': ariaInvalid, 'aria-describedby': ariaDescribedBy }) => {
    const { setFieldValue, values } = useFormikContext()
    const [displayValue, setDisplayValue] = useState('')

    const formatCreditCardNumber = (value) => {
        if (!value) return ''
        const digitsOnly = value.replace(/[^\d]/g, '')
        const parts = []
        for (let i = 0; i < digitsOnly.length; i += 4) {
            parts.push(digitsOnly.slice(i, i + 4))
        }
        return parts.join(' ').trim()
    }

    useEffect(() => {
        setDisplayValue(formatCreditCardNumber(values[name] || ''))
    }, [values[name]])

    const handleCreditCardChange = (e) => {
        const inputValue = e.target.value
        const pureDigits = inputValue.replace(/[^\d]/g, '')
        const formattedValue = formatCreditCardNumber(pureDigits)

        setFieldValue(name, pureDigits)
        setDisplayValue(formattedValue)
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
                    maxLength="19"
                    value={displayValue}
                    onChange={handleCreditCardChange}
                    aria-label={ariaLabel || label}
                    aria-invalid={ariaInvalid || (touched && error ? "true" : "false")}
                    aria-describedby={ariaDescribedBy || (touched && error ? `${name}-error` : undefined)}
                />
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
export default CreditCardInput
