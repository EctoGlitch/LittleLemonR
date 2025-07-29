import bike from '../Img/icons_assets/bike_black.png'
import { Link } from 'react-router-dom'

const Menu_Card = ({ img, name, price, description, url}) => {
    return (
        <>
            <div className={'bg-grey w-full max-h-[460px] max-sm:max-h-[500px] rounded-4xl'} role="article" aria-labelledby={`menu-item-name-${name}`}>
                <Link to={url} aria-label={`View details for ${name}`}><img className='rounded-t-4xl h-[192px] w-full object-cover' src={img} alt={name}/></Link>
                <div className='py-8 mx-8 max-sm:py-2 max-sm:mx-4'>
                    <div className='flex max-sm:flex-col justify-between my-3 max-sm:my-1'>
                        <p id={`menu-item-name-${name}`} className='font-p font-semibold text-black w-9/12 max-sm:w-full text-lead_text'>{name}</p>
                        <p className='font-p text-lead_text text-light_orange' aria-label={`Price: $${price}`}>${price}</p>
                    </div>
                    <p className='font-p text-lead_text text-black line-clamp-3 my-3'>{description}</p>
                    <div className='flex flex-row max-sm:flex-col justify-between my-3'>
                        <span className='flex flex-row flex-start'>
                            <p className='font-p text-black font-semibold'>Order a delivery</p>
                            <img className='mx-2 w-6 h-5' src={bike} alt='Delivery bike icon'/>
                        </span>
                        <Link to={`/menu/${url}`} aria-label={`Learn more about ${name}`}><p className='font-p text-black font-semibold'>Learn More ... </p></Link>
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default Menu_Card
