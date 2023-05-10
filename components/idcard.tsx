import Image from 'next/image';
import React from 'react';
import profile from '../images/samplepic.jpeg';
import styles from '../styles/Idcard.module.scss';

interface LoginProps {
  name: string;
  year: number;
}
//TODO: add regret count
//TODO: add rejection count
const IDCard: React.FC<LoginProps> = ({ name, year }) => {
  return (
    <div id={styles.container}>
      <div id={styles.wrapper}>
        <div className={styles.idcardoverlay}>
          <div className={styles.header}>
            <div className={styles.picwrapper}>
              <Image
                className={styles.pic}
                src={profile}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </div>
            <div className={styles.infowrapper}>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.class}>Class of {year}</p>
            </div>
          </div>
          <div className={styles.hero}>
            <div className={styles.rej}>
              <div className={styles.number}>10</div>
              <span className={styles.text}>
                &quot;We regret to inform you&quot;s
              </span>
            </div>
            <div className={styles.regrets}>
              <div className={styles.number}>21</div>
              <div className={styles.text}>Regrets I have</div>
            </div>
          </div>
        </div>
        <div className={styles.idcard}></div>
      </div>
    </div>
  );
};

export default IDCard;
