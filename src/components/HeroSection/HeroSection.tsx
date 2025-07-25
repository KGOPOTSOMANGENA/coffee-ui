import React from 'react';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/images/hero-background.jpg';

const HeroSection: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* ✅ Top Shape Divider FIRST */}
      <div className={styles.customShapeDividerTop}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.21C206.9,81.07,91.4,105.93,0,91.93V0H1200V27.35
               c-112.41,33.53-231.85,51.35-349.49,55.19
               -123.33,4.03-246.08-12.23-367.54-28.36
               C415.57,44.06,368.48,47.45,321.39,56.21Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>

      {/* ✅ Then the overlay */}
      <div className={styles.overlay}></div>

     <div className={styles.content}>
        <h1>
           Freshly Roasted <br />
         <span className={styles.coffeeText}>Coffee</span>
        </h1>
           <p>Start your day with the best brew.</p>
        <button className={styles.shopNowButton}>Shop Now</button>
      </div>

      {/* ✅ Bottom wave */}
      <div className={styles.bottomShapeDivider}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,120 1440,40 L1440,100 L0,100 Z" className={styles.shapeFill} />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
