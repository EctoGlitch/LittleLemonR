import React from 'react';
import bike from '../Img/icons_assets/bike_black.png'
import { Link } from 'react-router-dom'

const Menu_Card = ({ img, name, price, description, link}) => {
    return (
        <div className={'bg-grey min-w-[440px] rounded-4xl'}>
            <img className='rounded-t-4xl' src={img} alt={name}/>
            <div className='px-8 py-8'>
                <div className='flex justify-between my-3'>
                    <p className='font-p font-semibold text-black text-lead_text' text->{name}</p>
                    <p className='font-p text-lead_text text-light_orange'>{price}</p>
                </div>
                <p className='font-p text-lead_text text-black line-clamp-3 my-3'>{description}</p>
                <div className='flex flex-row justify-between my-3'>
                    <span className='flex flex-row'>
                        <p className='font-p text-black font-semibold'>Order a delivery</p>
                        <img className='mx-2' src={bike}/>
                    </span>
                    <Link to={link}><p className='font-p text-black font-semibold'>Learn More ... </p></Link>
                </div>
            </div>
        </div>
    )
}
export default Menu_Card