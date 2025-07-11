import React from 'react';

const Button = ({ label }) => {
    return (
        <>
            <button className="bg-gold rounded-4xl text-black font-p h-desktop_btn px-11">
                <p>{label}</p>
            </button>
        </>
    )
}
export default Button