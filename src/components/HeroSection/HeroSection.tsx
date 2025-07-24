import React from 'react';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/images/hero-background.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay}></div> {/* For the dark overlay */}
      <div className={styles.content}>
        <h1>FRESHLY ROASTED</h1>
        <h2>COFFEE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button className={styles.shopNowButton}>Shop now</button>
      </div>
    </section>
  );
};

export default HeroSection;