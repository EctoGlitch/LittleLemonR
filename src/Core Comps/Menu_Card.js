import bike from '../Img/icons_assets/bike_black.png'
import { Link } from 'react-router-dom'

const Menu_Card = ({ img, name, price, description, link}) => {
    return (
        <div className={'bg-grey w-full max-h-[460px] max-sm:max-h-[500px] rounded-4xl'}>
            <img className='rounded-t-4xl h-[192px] w-full object-cover' src={img} alt={name}/>
            <div className='py-8 mx-8 max-sm:py-2 max-sm:mx-4'>
                <div className='flex max-sm:flex-col justify-between my-3 max-sm:my-1'>
                    <p className='font-p font-semibold text-black w-9/12 max-sm:w-full text-lead_text'>{name}</p>
                    <p className='font-p text-lead_text text-light_orange'>${price}</p>
                </div>
                <p className='font-p text-lead_text text-black line-clamp-3 my-3'>{description}</p>
                <div className='flex flex-row max-sm:flex-col justify-between my-3'>
                    <span className='flex flex-row flex-start'>
                        <p className='font-p text-black font-semibold'>Order a delivery</p>
                        <img className='mx-2 w-6 h-5' src={bike} alt='bike'/>
                    </span>
                    <Link to={link}><p className='font-p text-black font-semibold'>Learn More ... </p></Link>
                </div>
            </div>
        </div>
    )
}
export default Menu_Card