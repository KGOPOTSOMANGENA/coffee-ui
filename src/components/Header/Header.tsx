import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Text Logo */}
      <div className={styles.logo}>
        Monate Coffee
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Contact</a></li>
          {/* Search icon as a link (after Contact) */}
          <li>
            <a href="#" className="material-icons" style={{ verticalAlign: 'middle', fontSize: '24px', color: '#333' }}>
              search
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
