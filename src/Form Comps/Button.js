import React from 'react';

const Button = ({ label, onClick, type, className }) => {
    return (
        <>
            <button
                className={`bg-gold rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
                hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:bg-light_orange disabled:cursor-not-allowed transition ease-in-out duration-450 ${className}`}
                onClick={onClick}
                type={type}
            >
                <p>{label}</p>
            </button>
        </>
    )
}
export default Button
