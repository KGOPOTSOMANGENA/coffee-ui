import React from 'react';
import styles from './MilkshakeCard.module.css';

//interface for MilkshakeCard
interface MilkshakeCardProps {
  imageSrc: string;
  title: string;
  price: number;
  likes: number;
}

const MilkshakeCard: React.FC<MilkshakeCardProps> = ({ imageSrc, title, price, likes }) => {
  return (
    <div className={styles.card}>
      <div className={styles.likes}>
       <span className="material-icons-sharp" style={{ fontSize: '18px', verticalAlign: 'middle', marginRight: '4px', color: '#333' }}>
        thumb_up
      </span>
        <span>{likes} likes</span>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.priceAndButton}>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <button className={styles.buyNowButton}>BUY NOW</button>
      </div>
    </div>
  );
};
export default MilkshakeCard;
