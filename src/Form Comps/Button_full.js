import React from 'react';

const Button_full = ({ label, disabled }) => {
    return (
        <>
            <button className="w-full bg-gold min-w-full rounded-4xl text-black font-p h-desktop_btn px-11 drop-shadow-md
            hover:bg-white hover:font-semibold active:bg-light_green active:text-white disabled:cursor-not-allowed disabled:bg-light_orange transition ease-in-out duration-450 " disabled={disabled}>
                <p>{label}</p>
            </button>
        </>
    )
}
export default Button_full
