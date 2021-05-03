import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/shop" className="option">
        Contact 
      </Link>
      {
        currentUser ?
        <div className="option" onClick={()=>auth.signOut()}>Sign out</div>
        :
        <Link className="option">Sign in</Link>
      }
    </div>
  </div>
);

export default Header;