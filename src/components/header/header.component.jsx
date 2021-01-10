import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink to='/signup' className='option'>
          SIGN UP
        </NavLink>
      )}
    </div>
  </div>
);

export default Header;
