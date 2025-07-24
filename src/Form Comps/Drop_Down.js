import { useState, useRef, useEffect } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';

const Drop_Down = ({ label, name, options, img_defualt, img_active, img_w, img_h, touched, error }) => {
    const { values, setFieldValue, setFieldTouched } = useFormikContext()

    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('')
    const dropdownRef = useRef(null)

    const placeholderText = label.toLowerCase()

    useEffect(() => {
        if (options && options.length > 0) {
            const initialValue = options.find(option => option.value === values[name])
            if (initialValue) {
                setSelectedOption(initialValue.label)
            } else {

                setSelectedOption(placeholderText)
            }
        }
    }, [values[name], options, label, placeholderText])


    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option.label)
        setIsOpen(false);

        if (setFieldValue) {
            setFieldValue(name, option.value)
            if (setFieldTouched) {
                setFieldTouched(name, true)
            }
        }
    }

    const handlePlaceholderClick = () => {
        setSelectedOption(placeholderText)
        setIsOpen(false);
        if (setFieldValue) {
            setFieldValue(name, '')
            if (setFieldTouched) {
                setFieldTouched(name, true)
            }
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const imageSrc = selectedOption === placeholderText ? img_defualt : img_active

    return (
        <>
        <div className='flex flex-col w-full' ref={dropdownRef}>
            {label && (
                <label className='font-p text-black font-bold py-3'>
                    {label}
                </label>
            )}
            <div className='w-full relative'>
                <button
                    onClick={toggleDropdown}
                    className={`w-full h-[80px] relative font-p py-6 rounded-4xl focus:outline-black appearance-none text-center flex items-center justify-between px-4 ${selectedOption === placeholderText ? 'text-black bg-[#fff]' : 'bg-dark_green text-white'}`}
                >

                    <img
                        src={imageSrc}
                        alt="Dropdown Icon"
                        className={`${img_w} ${img_h} block`}
                    />

                    <span className="flex-grow">{selectedOption}</span>

                    <svg className={`fill-current h-4 w-4 dropdown-arrow ${selectedOption !== placeholderText ? 'rotated' : ''}`}
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         style={{ fill: selectedOption === placeholderText ? '#495e57' : '#edefee' }}>
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#fff] rounded-4xl mt-2 z-20 shadow-lg drop-shadow-lg">

                        <div
                            onClick={handlePlaceholderClick}
                            className="px-4 py-3 font-p text-center cursor-pointer hover:bg-gray-100 text-black"
                        >
                            {placeholderText} 
                        </div>

                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => handleOptionClick(option)}
                                className="px-4 py-3 font-p text-center cursor-pointer hover:bg-gray-100 text-black"
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {touched && error ? (
                <div className='h-10 text-red-700 py-4'>
                    <ErrorMessage className='error font-p font-semibold' name={name} component="div" />
                </div>
            ) : (
                <div className='h-10 text-red-700 py-4'></div>
            )}
        </div>
        </>
    );
}

export default Drop_Down;
