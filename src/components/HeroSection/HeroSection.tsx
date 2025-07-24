import React from 'react';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/images/hero-background.jpg';

const HeroSection: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 🔽 Wave Shape Divider at the Top */}
  <div className={styles.customShapeDividerTop}>
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
      className={styles.shapeFill}
    />
  </svg>
</div>
      {/* Overlay and Content */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>FRESHLY ROASTED</h1>
        <h2>COFFEE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button className={styles.shopNowButton}>Shop now</button>
      </div>

      {/* 👇 Bottom Wave Shape Divider */}
      <div className={styles.bottomShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
