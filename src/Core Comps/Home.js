import Hero from "./Heading_Section"
import Wrapper from './Wrapper'
import desktop_home_hero_img from '../Img/icons_assets/desktop_home_hero_img.png'
import mobile_home_hero_img from '../Img/icons_assets/mobile_home_hero_img.png'
import Carousel from "./Carousel"
import Menu_Card from "./Menu_Card"
import Button from '../Form Comps/Button'
import { Link } from 'react-router-dom'

import greek_salad from '../Img/icons_assets/food/greek salad.jpg'
import bruschetta from '../Img/icons_assets/food/bruschetta.png'
import lemon_cake from '../Img/icons_assets/food/lemon-cake.jpg'
import Mario from '../Img/icons_assets/Mario.jpg'
import Adrian from '../Img/icons_assets/Adrian.png'

const Home = () => {

    return (
        <>
            <Hero className='mx-auto'>
                <div className="w-hero-width mx-auto">
                    <h1 className="text-gold font-display text-display_size max-sm:text-7xl -mt-7">Little Lemon</h1>
                    <h2 className="text-white font-display text-sub_title_size max-sm:text-5xl max-sm:m-0 -mt-10">Chicago</h2>
                    <p className="text-white text-p mb-14 max-sm:w-4/5">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <Link to='/reservations'><Button className='hover:bg-white hover:text-black' label={'Reserve a table'}/></Link>
                </div>
                <picture className="w-hero-width mx-auto">
                    <source media='(min-width:600px)' srcSet={desktop_home_hero_img}/>
                    <source media='(max-width:599px)' srcSet={mobile_home_hero_img}/>
                    <img src={mobile_home_hero_img} />
                </picture>
            </Hero>
            <Wrapper>
                <main>
                    <div className="flex justify-between my-10">
                        <h2 className="text-black font-display text-sub_title_size max-sm:text-5xl">This Weeks Specials</h2>
                        <Link to='/menu'>
                            <Button label='Online Menu'/>
                        </Link>
                    </div>

                    <Carousel>
                        <Menu_Card
                            img={greek_salad}
                            name='Greek Salad'
                            price='$12.99'
                            description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                            link=''
                        />
                        <Menu_Card
                            img={bruschetta}
                            name='Bruschetta'
                            price='$5.99'
                            description='Our bruschetta is made from grilled bread that has been smeared in garlic and seasoned with salt and olive oil.'
                            link=''
                        />
                        <Menu_Card
                            img={lemon_cake}
                            name='Lemon Cake'
                            price='$5.00'
                            description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can  be imagined.'
                            link=''
                        />
                    </Carousel>

                    <div className='my-10'>
                        <h2 className="text-black max-sm:text-5xl font-display text-sub_title_size">Testimonials</h2>
                        <Carousel>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl flex flex-col ">
                                <span className="text-gold font-semibold text-2xl">★★★★☆</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Bruschetta</p>
                                <img className="w-3/4" src={bruschetta}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Ashley</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>The freshest bruschetta i’ve ever had!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Greek Salad</p>
                                <img className="w-3/4" src={greek_salad}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Brandon</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>That crunch!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Greek Salad</p>
                                <img className="w-3/4" src={greek_salad}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Rebbeca</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>Freshest red onion!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Lemon Cake</p>
                                <img className="w-3/4" src={lemon_cake}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Miranda</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>Just Wow!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★☆</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Bruschetta</p>
                                <img className="w-3/4" src={bruschetta}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Ashley</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>The freshest bruschetta i’ve ever had!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Greek Salad</p>
                                <img className="w-3/4" src={greek_salad}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Brandon</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>That crunch!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Greek Salad</p>
                                <img className="w-3/4" src={greek_salad}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Rebbeca</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>Freshest red onion!</p>
                            </div>
                            <div className="h-80 min-w-64 [&>*]:p-2 bg-grey rounded-4xl">
                                <span className="text-gold font-semibold text-2xl">★★★★★</span>
                                <p className='font-p font-bold text-black text-lead_text' text->Lemon Cake</p>
                                <img className="w-3/4" src={lemon_cake}/>
                                <p className='font-p font-semibold text-black text-lead_text' text->Miranda</p>
                                <p className='font-p text-lead_text text-black line-clamp-2'>Just Wow!</p>
                            </div>
                        </Carousel>
                    </div>
                    <div className="grid max-sm:grid-cols-1 grid-cols-2">
                        <div className="[&>*]:p-2">
                            <h2 className="text-black font-display text-sub_title_size">Little Lemon</h2>
                            <p className='font-p font-bold text-black text-lead_text' text->Chicago</p>
                            <p className='font-p text-lead_text text-black my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className='font-p text-lead_text text-black my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="relative max-sm:static [&>*]:my-10">
                            <img className="w-72 max-sm:static absolute left-10 top-52 rounded-4xl" src={Mario}></img>
                            <img className="w-72 max-sm:static absolute left-1/2 top-20 rounded-4xl" src={Adrian}></img>
                        </div>
                    </div>
                </main>
            </Wrapper>
        </>
    )
}
export default Home