import React from 'react';
import styles from './BlogPostCard.module.css';

// Define the props interface for BlogPostCard
interface BlogPostCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.readMoreButton}>READ MORE</button>
      </div>
    </div>
  );
};

export default BlogPostCard;