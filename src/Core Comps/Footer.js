import { Link } from 'react-router-dom'
import foot_logo from '../Img/icons_assets/foot_logo.svg'
import fb from '../Img/icons_assets/fb.png'
import insta from '../Img/icons_assets/insta.png'
import twitter from '../Img/icons_assets/twitter.png'
import bluesky from '../Img/icons_assets/bluesky.png'
import reddit from '../Img/icons_assets/reddit.png'
import discord from '../Img/icons_assets/discord.png'

const Footer = () => {
    return (
        <>
            <footer className='max-sm:overflow-hidden  px-80 py-16 max-sm:px-6 max-sm:gap-y-10 bg-dark_green grid max-sm:grid-cols-1 grid-cols-footer' role="contentinfo">
                <img className='w-36 flex justify-start max-sm:ml-8 max-sm:mx-auto' src={foot_logo} alt="Little Lemon logo"/>
                <div className='flex justify-start max-sm:ml-8'>
                    <ul className='h-64 flex flex-col justify-between list-none font-p text-white ' aria-label="Main navigation">
                        <li className='hover:font-bold active:text-black'>
                            <Link to='/' aria-label="Home">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/about' aria-label="About">
                                <p>About</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/menu' aria-label="Menu">
                                <p>Menu</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/reservations' aria-label="Reservations">
                                <p>Reservations</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/order-online' aria-label="Order Online">
                                <p>Order Online</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/login' aria-label="Login">
                                <p>Login</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-start max-sm:ml-8'>
                    <ul className='h-64 flex flex-col justify-between list-none font-p text-white ' aria-label="Contact Information">
                        <li>
                            <address aria-label="Address">910 N Lake Shore<br/>
                                Dr #900, Chicago,<br/>
                                IL 60611, United<br/>
                                States
                            </address>
                        </li>
                        <li>
                            <a href="tel:+05890000111" aria-label="Phone number">+1 (312) - 254 - 2485</a>
                        </li>
                        <li>
                            <a  href="mailto:info@littlelemon.com" aria-label="Email address">info@littlelemon.com</a>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-end max-sm:justify-start max-sm:ml-8'>
                    <ul className='h-64 grid grid-cols-2 grid-rows-3 gap-y-5 justify-between list-none font-p text-white ' aria-label="Social Media Links">
                        <li>
                            <a href='https://www.facebook.com/' aria-label="Facebook">
                                <img src={fb} alt="Facebook icon" />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/' aria-label="Instagram">
                                <img src={insta} alt="Instagram icon" />
                            </a>
                        </li>
                        <li>
                            <a href='https://x.com/' aria-label="Twitter">
                                <img src={twitter} alt="Twitter icon" />
                            </a>
                        </li>
                        <li>
                            <a href='https://bsky.app/' aria-label="Bluesky">
                                <img src={bluesky} alt="Bluesky icon" />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.reddit.com/' aria-label="Reddit">
                                <img src={reddit} alt="Reddit icon" />
                            </a>
                        </li>
                        <li>
                            <a href='https://discord.com/' aria-label="Discord">
                                <img src={discord} alt="Discord icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer
