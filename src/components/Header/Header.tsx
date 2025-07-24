//import React from 'react';
import styles from './Header.module.css'; // Import CSS Module
//import logo from '../../assets/images/logo.png'; // Import image

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
     {/*<div className={styles.logo}>
        <img src={logo} alt="Dify Solutions Logo" />
      </div>*/}

      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.searchIcon}>
        {/* You can use an icon library like React Icons or an SVG here */}
        <i className="fas fa-search"></i> {/* Example for a font-awesome icon */}
      </div>
    </header>
  );
};

export default Header;