import React from 'react';
import logo from "../assets/images/logo.png"
import '../assets/styles/header.css'


const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
      </div>
      <nav style={styles.nav} className="homenav">
          <div className='nav-item'>
              <h5><span className='icon-support'></span>Customer Support</h5>
          </div>
          <div className='nav-item my-account'>
            <div className='icon-bars'></div>
            <div className='icon-user'></div>
          </div>
        
        {/* <ul style={styles.navList}>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Become an affiliate</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul> */}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundImage:'radial-gradient(circle, #3D627B,#1D445B)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'100px',
    padding: '0 40px 0 40px',
    position:'sticky',
    top:0,
    left:0,
    right:0,
    zIndex:999999,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  logo: {
    marginRight: '20px',
    zIndex:999999
  },
  logoImage: {
    width: '150px',
    height: '150px',
    zIndex:999999,
    overflow:'hidden'

  },
  nav: {
    display:'flex',
    zIndex:999999,
    marginRight:"40px"
  },
  navList: {
    display:'none',
    position:'absolute',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex:999999,
    position:'relative'

  },
  navItem: {
    marginLeft: '20px',
    zIndex:999999

  },
};

export default Header;
