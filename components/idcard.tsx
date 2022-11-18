import React from 'react';
import styles from '../styles/Home.module.scss';

interface LoginProps {
  name: string;
  year: number;
  bio: string;
}

const IDCard: React.FC<LoginProps> = ({ name, year, bio }) => {
  return (
    <div className={styles.idcard}>
      <div className={styles.header}>
        <div className={styles.name}>Edmond Wen</div>
        <p>Class of 2024</p>
      </div>
      <h1>{name}</h1>
      <h1>{year}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default IDCard;
