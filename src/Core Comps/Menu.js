import Hero from "./Heading_Section"
import Wrapper from "./Wrapper"
import Button from '../Form Comps/Button'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import hero_menu_full from '../Img/icons_assets/menu_hero_full.png'
import hero_image_small from '../Img/icons_assets/menu_hero.png'
import * as menu from './menu_context'

import Search from '../Form Comps/Search'


import Menu_Card from "./Menu_Card"

const Menu = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    const filteredMenuItems = React.useMemo(() => {
        if (!searchTerm) {
            return []
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase()
        return menu.menu_items.filter(item =>
            item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.category.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.description.toLowerCase().includes(lowerCaseSearchTerm)
        )
    }, [searchTerm])

    const menu_mains = menu.menu_items.filter(item => item.category === 'Mains')
    const menu_breakfast = menu.menu_items.filter(item => item.category === 'Breakfast')
    const menu_lunch = menu.menu_items.filter(item => item.category === 'Lunch')
    const menu_dinner = menu.menu_items.filter(item => item.category === 'Dinner')
    const menu_dessert = menu.menu_items.filter(item => item.category === 'Dessert')
    const menu_non_alcoholic = menu.menu_items.filter(item => item.category === 'Non_Alcoholic_Drinks')
    const menu_alcoholic = menu.menu_items.filter(item => item.category === 'Alcoholic_Drinks')

    return (
        <>
            <Hero className='mx-auto' role="region" aria-labelledby="loyalty-heading">
                <div className="w-hero-width h-[780px] max-sm:h-[35rem]  mx-auto [&>*]:my-5">
                    <h1 id="loyalty-heading" className="text-gold font-display text-display_size max-sm:text-6xl text-7xl -mt-7">Join Our Loyalty Program & Earn Exclusive Rewards!</h1>
                    <h2 className="text-white font-display text-4xl max-sm:text-5xl max-sm:m-0 mt-3 mb-7">Chicago</h2>
                    <ul className="list-disc mb-6" aria-label="Loyalty Program Benefits">
                        <li className="font-p text-white my-2">Earn points for every dollar spent</li>
                        <li className="font-p text-white my-2">Redeem rewards for free meals & special discounts</li>
                        <li className="font-p text-white my-2">Get VIP access to new menu items and special events</li>
                    </ul>
                    <Link to='/register'><Button className='hover:bg-white hover:text-black' label={'Register Now'} aria-label="Register for loyalty program"/></Link>
                </div>
                <picture className="w-full h-[780px] max-sm:h-[25rem] mx-auto">
                    <source className="h-[620px]" media='(min-width:600px)' srcSet={hero_menu_full}/>
                    <source media='(max-width:599px)' srcSet={hero_image_small}/>
                    <img className="rounded-4xl" src={hero_image_small} alt="Little Lemon menu hero image" />
                </picture>
            </Hero>
            <div className="bg-white">
                <Wrapper>
                    <div className="flex flex-row max-sm:flex-col justify-between" role="search">
                        <h2 className="text-black max-sm:text-5xl font-display text-sub_title_size">Browser Our full Menu!</h2>
                        <Search 
                            onSearch={ handleSearch }
                            aria-label="Search menu items"
                        />
                    </div>
                    <div className="bg-dark_green">
                        <h2 className="text-gol mx-8 my-5 py-10 max-sm:text-5xl text-gold font-display text-sub_title_size">Menu</h2>
                    </div>
                    <div id='menu' role="region" aria-labelledby="menu-sections-heading">
                        {/* -------------------------------------------Search Results-------------------------------------- */}
                        {searchTerm && (
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 max-sm:2 mx-5" id="search_filter" aria-live="polite">
                                {filteredMenuItems.length > 0 ? (
                                    filteredMenuItems.map((item, index) => (
                                        <Menu_Card
                                            key={index}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                            img_src={item.img_src}
                                            url={item.url}
                                        />
                                    ))
                                ) : (
                                    <p className="text-black font-p my-5" aria-live="polite">No results found for "{searchTerm}".</p>
                                )}
                            </div>
                        )}

                        {/* -------------------------------------------Categorized Menu (shown when no search term)-------------------------------------- */}
                        {!searchTerm && (
                            <>
                                <div className="mains" role="region" aria-labelledby="mains-heading">
                            <p id="mains-heading" className="text-black font-p font-black my-5 uppercase">Mains</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="mains">
                            { menu_mains.map(item => (
                                <Menu_Card
                                    key={item.name}
                                    img={item.img_src}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    alt={item.name}
                                    img_src={item.img_src}
                                    url={item.url}
                                />
                            )) }
                        </div>
                        <div className="breakfast" role="region" aria-labelledby="breakfast-heading">
                            <p id="breakfast-heading" className="text-black font-p font-black my-10 uppercase">Breakfast</p>
                            <div className="grid grid-cols-2 gap-8 max-sm:gap-1 max-sm:grid-cols-1 mx-5" id="breakfast">
                            { menu_breakfast.map(item => (
                                <Menu_Card
                                key={item.name}
                                    img={item.img_src}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    alt={item.name}
                                    img_src={item.img_src}
                                    url={item.url}
                                />
                            )) }
                            </div>
                        </div>
                        <div className="lunch" role="region" aria-labelledby="lunch-heading">
                            <p id="lunch-heading" className="text-black font-p font-black my-10 uppercase">Lunch</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="lunch">
                            { menu_lunch.map(item => (
                                <Menu_Card
                                key={item.name}
                                    img={item.img_src}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    alt={item.name}
                                    img_src={item.img_src}
                                    url={item.url}
                                />
                            )) }
                            </div>
                        </div>
                        <div className="dinner" role="region" aria-labelledby="dinner-heading">
                            <p id="dinner-heading" className="text-black font-p font-black my-10 uppercase">Dinner</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="dinner">
                            { menu_dinner.map(item => (
                                <Menu_Card
                                key={item.name}
                                    img={item.img_src}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    alt={item.name}
                                    img_src={item.img_src}
                                    url={item.url}
                                />
                            )) }
                            </div>
                        </div>
                        <div className="dessert" role="region" aria-labelledby="dessert-heading">
                            <p id="dessert-heading" className="text-black font-p font-black my-10 uppercase">Dessert</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="dinner">
                            { menu_dessert.map(item => (
                                <Menu_Card
                                key={item.name}
                                    img={item.img_src}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    alt={item.name}
                                    img_src={item.img_src}
                                    url={item.url}
                                />
                            )) }
                            </div>
                        </div>
                        <div className="non_alcoholic" role="region" aria-labelledby="non-alcoholic-heading">
                            <p id="non-alcoholic-heading" className="text-black font-p font-black my-10 uppercase">Non Alcoholic Drinks</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="dinner">
                                { menu_non_alcoholic.map(item => (
                                    <Menu_Card
                                    key={item.name}
                                        img={item.img_src}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                        alt={item.name}
                                        img_src={item.img_src}
                                        url={item.url}
                                    />
                                )) }
                            </div>
                        </div>
                        <div className="alcoholic" role="region" aria-labelledby="alcoholic-heading">
                            <p id="alcoholic-heading" className="text-black font-p font-black my-10 uppercase">Alcoholic Drinks</p>
                            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-1 gap-8 mx-5" id="dinner">
                                { menu_alcoholic.map(item => (
                                    <Menu_Card
                                    key={item.name}
                                        img={item.img_src}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                        alt={item.name}
                                        img_src={item.img_src}
                                        url={item.url}
                                    />
                                )) }
                            </div>
                        </div>
                    </div>
                    </>
                )}
                </div>
            </Wrapper>
            </div>
        </>
    )
}
export default Menu
