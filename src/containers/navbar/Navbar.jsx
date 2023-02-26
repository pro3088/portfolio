import React, {useState} from 'react';
import './navbar.css';

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/Rotex_Logo.svg'

const Menu = () => (
  <>
  <p><a href='#About'>About</a></p>
  <p><a href='#Project'>Project</a></p>
  <p><a href='#Experience'>Experience</a></p>
  </>
)
  

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='portf__navbar'>
      <div className='portf__navbar-logo'>
            <img src={logo} alt='logo' />
      </div>
      <div className='portf__navbar-links'>
        <Menu />
      </div>
      <div className='portf__navbar-contact'>
        <button type='button'> <a href="mailto:rotimiabayomi123@gmail.com">Contact Me</a></button>
      </div>
      <div className='portf__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu &&
          <div className='portf__navbar-menu'>
            <div className='portf__navbar-menu_links'>
              <Menu />
              <div className='portf__navbar-menu_contact'>
                <button type='button'>Contact Me</button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
