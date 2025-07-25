import React, { useState } from 'react';
import Hero from "./Heading_Section"
import { Standalone_Drop_Down } from "../Form Comps/Drop_Down"
import { countries } from "./Drop_Down_Context"

import Wrapper from './Wrapper'
import Carousel from "./Carousel"
import Order_Card from "./Order_Card"
import * as menu from './menu_context'
import Search from '../Form Comps/Search';

import order_hero_img from '../Img/icons_assets/order_hero.png'
import globe_green from '../Img/icons_assets/globe_green.png'

import breakfast from '../Img/icons_assets/order-sun.png'
import lunch from '../Img/icons_assets/order-lunch.png'
import dinner from '../Img/icons_assets/order-kabob.png'
import dessert from '../Img/icons_assets/order-dessert.png'

const Order_Online = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (value) => {
        setSelectedValue(value);
    }


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
            );
        }, [searchTerm])

        const sortMenu = (category)  => {
            const filtered = menu.menu_items.filter(item => item.category === category)
            const filteredLength = filtered.length
            return { filtered, filteredLength }
        }

        const len_search = filteredMenuItems.length


        const menu_mains = sortMenu('Mains').filtered;
        const len_mains = sortMenu('Mains').filteredLength;

        const menu_breakfast = sortMenu('Breakfast').filtered
        const len_breakfast = sortMenu('Breakfast').filteredLength;

        const menu_lunch = sortMenu('Lunch').filtered
        const len_lunch = sortMenu('Lunch').filteredLength;

        const menu_dinner = sortMenu('Dinner').filtered
        const len_dinner = sortMenu('Dinner').filteredLength;

        const menu_dessert = sortMenu('Dessert').filtered
        const len_dessert = sortMenu('Dessert').filteredLength;

        const menu_non_alcoholic = sortMenu('Non_Alcoholic_Drinks').filtered
        const len_non_alcoholic = sortMenu('Non_Alcoholic_Drinks').filteredLength;

        const menu_alcoholic = sortMenu('Alcoholic_Drinks').filtered
        const len_alcoholic = sortMenu('Alcoholic_Drinks').filteredLength;

    return (
        <>
            <Hero className='mx-auto'>
                    <div className="w-hero-width max-sm:w-full mx-auto *:py-8">
                        <h1 className="text-gold font-display text-display_size max-sm:text-7xl -mt-7">Always Fresh</h1>
                        <Standalone_Drop_Down
                            label="Select an option"
                            name="location"
                            options={countries}
                            img_defualt={globe_green}
                            img_active={globe_green}
                            img_w="w-6"
                            img_h="h-6"
                            value={selectedValue}
                            onChange={handleDropdownChange}
                        />
                        <span className='w-11/12 h-20 flex flex-row items-center justify-between  max-sm:grid  max-sm:grid-cols-2 max-sm:w-[333px] max-sm:h-[300px]' >
                            <img src={breakfast} className='block w-16 h-16 max-sm:justify-self-center' alt='Breakfast Icon'/>
                            <img src={lunch} className='block w-75px h-14 max-sm:justify-self-center' alt='Lunch Icon'/>
                            <img src={dinner} className='block w-16 h-16 max-sm:justify-self-center' alt='Dinner Icon'/>
                            <img src={dessert} className='block w-16 h-[47px] max-sm:justify-self-center' alt='Dessert Icon'/>
                        </span>
                    </div>
                    <img className='rounded-4xl' src={order_hero_img} />
            </Hero>
            <div className="bg-white">
                <Wrapper>
                    <div className="flex flex-row max-sm:flex-col justify-between">
                        <h2 className="text-black max-sm:text-5xl font-display text-sub_title_size">Browser Our full Menu!</h2>
                        <Search
                            onSearch={ handleSearch }
                        />
                    </div>

                    {searchTerm && (
                        <div id="search_filter">
                            <Carousel id="search">
                                <div className="grid gap-4"
                                        style={{gridTemplateColumns: `repeat(${len_search}, minmax(440px, 1fr))`}}>
                                        {filteredMenuItems.length > 0 ? (
                                            filteredMenuItems.map(item => (
                                                <Order_Card
                                                    key={item.name}
                                                    img={item.img_src}
                                                    name={item.name}
                                                    price={item.price}
                                                    description={item.description}
                                                    alt={item.name}
                                                />
                                            ))
                                        ) : (
                                            <p className="text-black font-p my-5">No results found for "{searchTerm}".</p>
                                        )}
                            </div>
                        </Carousel>
                        </div>
                        
                    )}

                    {/* non filtered results */}
                    {!searchTerm && (
                    <main>
                        <div className="mains">
                            <p className="text-black font-p font-black my-5 uppercase">Mains</p>
                            <Carousel id="mains">
                                <div className="grid gap-4"
                                        style={{gridTemplateColumns: `repeat(${len_mains}, minmax(440px, 1fr))`}}>
                                        { menu_mains.map(item => (
                                            <Order_Card
                                                key={item.name}
                                                img={item.img_src}
                                                name={item.name}
                                                price={item.price}
                                                description={item.description}
                                                alt={item.name}
                                            />
                                        )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="breakfast">
                            <p className="text-black font-p font-black my-10 uppercase">Breakfast</p>
                            <Carousel id="breakfast">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_breakfast}, minmax(440px, 1fr))`}}>
                                        { menu_breakfast.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="lunch">
                            <p className="text-black font-p font-black my-10 uppercase">Lunch</p>
                            <Carousel id="lunch">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_lunch}, minmax(440px, 1fr))`}}>
                                        { menu_lunch.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="dinner">
                            <p className="text-black font-p font-black my-10 uppercase">Dinner</p>
                            <Carousel id="dinner">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_dinner}, minmax(440px, 1fr))`}}>
                                        { menu_dinner.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="dessert">
                            <p className="text-black font-p font-black my-10 uppercase">Dessert</p>
                            <Carousel id="dessert">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_dessert}, minmax(440px, 1fr))`}}>
                                        { menu_dessert.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="non_alcoholic">
                            <p className="text-black font-p font-black my-10 uppercase">Non Alcoholic Drinks</p>
                            <Carousel id="menu_non_alcoholic">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_non_alcoholic}, minmax(440px, 1fr))`}}>
                                        { menu_non_alcoholic.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    <div className="alcoholic">
                            <p className="text-black font-p font-black my-10 uppercase">Alcoholic Drinks</p>
                            <Carousel id="menu_alcoholic">
                                <div className="grid gap-4"
                                    style={{gridTemplateColumns: `repeat(${len_alcoholic}, minmax(440px, 1fr))`}}>
                                        { menu_alcoholic.map(item => (
                                        <Order_Card
                                            key={item.name}
                                            img={item.img_src}
                                            name={item.name}
                                            price={item.price}
                                            description={item.description}
                                            alt={item.name}
                                        />
                                    )) }
                            </div>
                        </Carousel>
                    </div>
                    </main>
                )}
                </Wrapper>
            </div>
        </>
    )
}
export default Order_Online
