import React, { useState, useEffect } from 'react'

const Add_To_Cart_Alert = ({ message, type, duration = 5000 }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (message) {
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false)
            }, duration)
            return () => clearTimeout(timer)
        }
    }, [message, duration])

    if (!isVisible) return null

    const alertClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    }

    return (
        <>
            <div className={`fixed top-5 h-[150px] w-full max-w-md left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-black font-p ${alertClasses[type] || 'bg-gray-700'} transition-opacity duration-500 z-50 flex items-center justify-between`}>
                <span className='text-black font-p h-fit flex flex-col text-wrap'>
                    {message.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < message.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </span>
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-4 text-black font-bold text-lg leading-none hover:text-gray-200"
                    aria-label="Close alert"
                >
                    <p className='text-black font-bold'>&times</p>
                </button>
            </div>
        </>
    )
}

export default Add_To_Cart_Alert
