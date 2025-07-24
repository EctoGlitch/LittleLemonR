import React, { useState, useEffect } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const Text_Input = ({ label, type, name, touched, error }) => {
    const { setFieldValue, values, handleChange } = useFormikContext()
    const [displayValue, setDisplayValue] = useState('')

    const formatPhoneNumber = (value) => {
        if (!value) return ''
        const phoneNumberDigits = value.replace(/[^\d]/g, '')

        if (phoneNumberDigits.length < 4) {
            return phoneNumberDigits
        }
        if (phoneNumberDigits.length < 7) {
            return `(${phoneNumberDigits.slice(0, 3)}) ${phoneNumberDigits.slice(3)}`
        }
        return `(${phoneNumberDigits.slice(0, 3)}) - ${phoneNumberDigits.slice(
            3,
            6
        )} - ${phoneNumberDigits.slice(6, 10)}`
    }

    useEffect(() => {
        if (type === 'tel') {
            setDisplayValue(formatPhoneNumber(values[name] || ''))
        } else {
            setDisplayValue(values[name] || '')
        }
    }, [values[name], type, formatPhoneNumber, handleChange])

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value
        const pureDigits = inputValue.replace(/[^\d]/g, '')

        setFieldValue(name, pureDigits) //So that Formik and yup don't get tripped up by extra characters
        setDisplayValue(formatPhoneNumber(pureDigits))
    }

    const handleGenericChange = (e) => {
        setFieldValue(name, e.target.value);
    };

    return (
        <div className='w-full flex flex-col'>
            <label className='font-p text-black font-bold py-3'>{ label }</label>
            <Field
                className='font-p text-black h-[80px] p-6 rounded-4xl'
                type={type}
                name={name}
                placeholder={label}
                inputMode={type === 'tel' ? 'numeric' : undefined}
                value={type === 'tel' ? displayValue : values[name] || ''}
                onChange={type === 'tel' ? handlePhoneChange : handleGenericChange}
            />
            {touched && error ? (
                <div className='h-10 text-red-700 py-4'>
                    <ErrorMessage className='error font-p font-semibold' name={ name } component="div" />
                </div>) : (
                <div className='h-10 text-red-700 py-4'></div>
                )
            }
        </div>
    )
}
export default Text_Input
