import React from 'react';
import styles from './CategoryCard.module.css';

// Define the props interface for CategoryCard
interface CategoryCardProps {
  imageSrc: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.viewMoreButton}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;