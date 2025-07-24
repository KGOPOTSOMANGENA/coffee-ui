import React from 'react';
import styles from './Footer.module.css';

// Import social media icons (you can replace with actual SVGs or Font Awesome)
import facebookIcon from '../../assets/images/facebook.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import instagramIcon from '../../assets/images/instagram.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Products</h4>
          <ul>
            <li><a href="#">New in</a></li>
            <li><a href="#">Weekly Pick</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Category</h4>
          <ul>
            <li><a href="#">Coffee</a></li>
            <li><a href="#">Milk Shakes</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Company info</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Vouchers</a></li>
            <li><a href="#">Our Experts</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow us</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottomLinksWrapper}>
      <div className={styles.bottomLinks}>
        <a href="#">Data settings</a>
        <a href="#">Cookie settings</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms And Conditions</a>
        <a href="#">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;