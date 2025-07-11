import React, { useContext, useEffect, useRef, useState } from 'react';
import desktop_logo from '../Img/icons_assets/Logo.svg'
import mobile_logo from '../Img/icons_assets/LogoM.svg'
import basket from '../Img/icons_assets/Basket.svg'
import { Link } from 'react-router-dom';


function Header() {
  const prevScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  const hamburgerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const [hamburgerClasses, setHamburgerClasses] = useState({
    top: 'bg-dark_green h-1 w-8 m-2 max-sm:block',
    mid: 'bg-dark_green h-1 w-8 m-2 max-sm:block',
    bot: 'bg-dark_green h-1 w-8 m-2 max-sm:block',
  });

  // Debounce function
  // this was to fix it sliding up unexpectedly
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles isOpen when the button is pressed
  };

  useEffect(() => {
    function animateMenu() {
      const midNav = document.getElementById('mid_navs');
      if (midNav) {
        if (isOpen) {
          midNav.style.animation = 'collapse_reverse 0.8s ease-in forwards';
        } else {
          midNav.style.animation = 'collapse ease-in 0.8s forwards';
        }
      }
    }
    animateMenu();
  }, [isOpen]);

  useEffect(() => {
    setHamburgerClasses(`max-sm:absolute max-sm:left-8 ${isOpen ? 'hamburger-open' : 'hamburger-closed'}`);
  }, [isOpen]);


  useEffect(() => {
  function hideOnScroll() {
    const currentScrollY = window.scrollY;
    const threshold = window.innerHeight / 4; // Percentage of the page

    setIsHidden(currentScrollY > prevScrollY.current && currentScrollY > threshold);
    prevScrollY.current = currentScrollY;
  }

  const debouncedHideOnScroll = debounce(hideOnScroll, 300);

  window.addEventListener('scroll', debouncedHideOnScroll);

  return () => {
    window.removeEventListener('scroll', debouncedHideOnScroll);
  };
}, []);

  const navClasses = `relative bg-white text-dark_green font-p flex h-desktop_nav max-[400px]:h-mobile_nav  justify-center place-items-center sticky top-0 transition-transform duration-300
  ${isHidden ? 'slideup'  : 'slidedown'}`;


    return (
      <nav id='nav' className={navClasses}>
          <ul className='h-8 flex flex-row w-4/5 justify-evenly place-items-center list-none '>
              <li className='max-sm:absolute max-sm:left-8'>
                <button id='hamburger' onClick={toggleMenu}>
                  <span id='top_ham' className={`bg-dark_green h-1 w-8 m-2 max-sm:block
                    ${isOpen ? 'top_ham' : 'top_ham_reverse' }`}>
                  </span>
                  <span id='mid_ham' className={`bg-dark_green h-1 w-8 m-2 max-sm:block
                    ${isOpen ? 'mid_ham' : 'mid_ham_reverse'}`}>
                  </span>
                  <span id='bot_ham' className={`bg-dark_green h-1 w-8 m-2 max-sm:block
                    ${isOpen ? 'bot_ham' : 'bot_ham_reverse'}`}>
                  </span>
                </button>
              </li>
              <li>
                  <Link to="/">
                      <picture className='max-sm:absolute max-sm:top-1/3 max-sm:-translate-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-8 sm:h-auto ' >
                          <source media='(min-width:600px)' srcSet={desktop_logo}/>
                          <source media='(max-width:599px)' srcSet={mobile_logo}/>
                          <img src={mobile_logo} />
                      </picture>
                  </Link>
              </li>
              <div id="mid_navs"
              className={`flex justify-evenly place-items-center max-sm:place-items-start
              max-sm:pl-8 max-sm:h-80 bg-white w-screen flex-row max-sm:flex-col
              max-sm:absolute max-sm:top-24 max-sm:z-10`}
              >
              {/* ${isCollasped ? "mid_navs_open" : "mid_navs_close" } */}
                <li className='hover:font-bold active:text-black'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:font-bold active:text-black'>
                    <Link to="/about">About</Link>
                </li>
                <li className='hover:font-bold active:text-black'>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li className='hover:font-bold active:text-black'>
                    <Link to="/order-online">Order Online</Link>
                </li>
                <li className='hover:font-bold active:text-black'>
                    <Link to="/login">Login</Link>
                </li>
              </div>
              <li className='hover:font-bold active:text-black max-sm:absolute max-sm:right-10'>
                    <Link to="/cart"><img src={basket} alt="Basket" /></Link>
              </li>
          </ul>
      </nav>
      )
}

export default Header