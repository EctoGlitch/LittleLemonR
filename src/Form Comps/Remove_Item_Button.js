import React from 'react';
import del from '../Img/icons_assets/delete.png'

const Remove_Item_Button = ({ onClick }) => {
    return (
            <button
                onClick={onClick}
                className="bg-gold flex justify-center items-center rounded-full text-black font-p w-9 h-9 drop-shadow-md
            hover:bg-white hover:font-semibold active:bg-light_green active:text-white  transition ease-in-out duration-450 "
                aria-label="Remove item"
            >
                <img className='w-4 h-4'  src={del} alt='Delete icon'/>
            </button>
    );
};

export default Remove_Item_Button;
