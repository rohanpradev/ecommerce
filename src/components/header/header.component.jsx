import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <NavLink to='/shop' className='option' activeClassName='active'>
        SHOP
      </NavLink>
      <NavLink to='/contact' className='option' activeClassName='active'>
        CONTACT
      </NavLink>
      <NavLink to='/signup' className='option' activeClassName='active'>
        SIGN UP
      </NavLink>
    </div>
  </div>
);

export default Header;
