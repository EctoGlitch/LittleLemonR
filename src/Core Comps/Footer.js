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
            <footer className='max-sm:overflow-hidden  px-80 py-16 max-sm:px-6 max-sm:gap-y-10 bg-dark_green grid max-sm:grid-cols-1 grid-cols-footer'>
                <img className='w-36 flex justify-start max-sm:ml-8 max-sm:mx-auto' src={foot_logo}/>
                <div className='flex justify-start max-sm:ml-8'>
                    <ul className='h-64 flex flex-col justify-between list-none font-p text-white '>
                        <li className='hover:font-bold active:text-black'>
                            <Link to='/'>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/about'>
                                <p>About</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/menu'>
                                <p>Menu</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/reservations'>
                                <p>Reservations</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/order-online'>
                                <p>Order Online</p>
                            </Link>
                        </li>
                        <li className='hover:font-bold active:text-black' >
                            <Link to='/login'>
                                <p>Login</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-start max-sm:ml-8'>
                    <ul className='h-64 flex flex-col justify-between list-none font-p text-white '>
                        <li>
                            <address>910 N Lake Shore<br/>
                                Dr #900, Chicago,<br/>
                                IL 60611, United<br/>
                                States
                            </address>
                        </li>
                        <li>
                            <a href="tel:+05890000111">+1 (312) - 254 - 2485</a>
                        </li>
                        <li>
                            <a  href="mailto:info@littlelemon.com">info@littlelemon.com</a>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-end max-sm:justify-start max-sm:ml-8'>
                    <ul className='h-64 grid grid-cols-2 grid-rows-3 gap-y-5 justify-between list-none font-p text-white '>
                        <li>
                            <a href='https://www.facebook.com/'>
                                <img src={fb} />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/'>
                                <img src={insta} />
                            </a>
                        </li>
                        <li>
                            <a href='https://x.com/'>
                                <img src={twitter} />
                            </a>
                        </li>
                        <li>
                            <a href='https://bsky.app/'>
                                <img src={bluesky} />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.reddit.com/'>
                                <img src={reddit} />
                            </a>
                        </li>
                        <li>
                            <a href='https://discord.com/'>
                                <img src={discord} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer