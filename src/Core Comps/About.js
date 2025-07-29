import Hero from "./Heading_Section"
import Wrapper from './Wrapper'

import Button from '../Form Comps/Button'
import { Link } from 'react-router-dom'

import Adrian from '../Img/icons_assets/Mario.jpg'
import Mario from '../Img/icons_assets/Mariox2.png'

import desktop_home_hero_img from '../Img/icons_assets/desktop_home_hero_img.png'
import mobile_home_hero_img from '../Img/icons_assets/mobile_home_hero_img.png'

import Map from './Map'

const About = () => {
    return (
        <>
            <Hero className='mx-auto' role="region" aria-labelledby="about-heading">
                <div className="w-hero-width mx-auto">
                    <h1 id="about-heading" className="text-gold font-display text-display_size max-sm:text-7xl -mt-7">Little Lemon</h1>
                    <h2 className="text-white font-display text-sub_title_size max-sm:text-5xl max-sm:m-0 -mt-10">Chicago</h2>
                    <p className="text-white text-p mb-14 max-sm:w-4/5">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    <Link to='/reservations'><Button className='hover:bg-white hover:text-black' label={'Reserve a table'} aria-label="Reserve a table"/></Link>
                </div>
                <picture className="w-hero-width mx-auto">
                    <source media='(min-width:600px)' srcSet={desktop_home_hero_img} />
                    <source media='(max-width:599px)' srcSet={mobile_home_hero_img} />
                    <img src={ mobile_home_hero_img } alt="Little Lemon restaurant interior" />
                </picture>
            </Hero>
            <div className="bg-white">
                <Wrapper>
                    <div>
                        <h2 className="text-black font-display text-sub_title_size max-sm:text-5xl">Two Brothers</h2>
                        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-20">
                            <div>
                                <img className="w-full rounded-4xl" src={ Adrian } alt="Adrian, one of the Little Lemon owners" />
                                <div className="[&>*]:py-2 my-16">
                                    <p className='font-p font-bold text-black text-lead_text'>ADRIAN</p>
                                    <p className='font-p font-semibold text-black text-lead_text'>Role</p>
                                    <p className='font-p font-regular text-black text-pargraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p className='font-p font-regular text-black text-pargraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

                                </div>
                            </div>
                            <div className="max-sm:flex max-sm:flex-col-reverse">
                                <div className="[&>*]:py-2">
                                    <p className='font-p font-bold text-black text-lead_text'>MARIO</p>
                                    <p className='font-p font-semibold text-black text-lead_text'>Role</p>
                                    <p className='font-p font-regular text-black text-pargraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p className='font-p font-regular text-black text-pargraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                </div>
                                <img className="w-full rounded-4xl my-16" src={ Mario } alt="Mario, one of the Little Lemon owners" />
                            </div>
                            <div>

                            </div>
                        </div>
                        <div role="region" aria-labelledby="hours-heading">
                            <h2 id="hours-heading" className="text-black font-display text-sub_title_size max-sm:text-5xl">Hours</h2>
                            <ul className='h-64 flex flex-col justify-between list-none font-p text-white '>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Monday: Closed
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Tuesday: 10AM - 8PM
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Wednesday: 10AM - 8PM
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Thursday: 10AM - 8PM
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Friday: 12AM - 10PM
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Saturday: 12AM - 10PM
                                </li>
                                <li className='font-p font-bold text-black text-lead_text'>
                                    Sunday: 12AM - 10PM
                                </li>
                            </ul>
                        </div>
                        <div className="my-20" role="region" aria-labelledby="location-heading">
                            <p id="location-heading" className='font-p font-semibold text-black text-lead_text uppercase'>Located 910 N Lake Shore Dr #900, Chicago, IL 60611, United States</p>
                            <Map aria-label="Restaurant Location Map"/>
                        </div>
                    </div>
                </Wrapper>

            </div>

        </>
    )
}
export default About
