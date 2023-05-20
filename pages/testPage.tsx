import React from 'react';
import IDCard from '../components/idcard-old';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Gallery.module.scss';

const arr = Array.from({ length: 6 }).fill(6);
function Gallery() {
  return (
    <div className={styles.gallery}>
      {arr.map((item, index) => (
        <IDCard key={index} name="RJ Maokhamphiou" year={2022} />
      ))}
    </div>
  );
}

export default function Test() {
  //TODO: add regret count
  //TODO: add rejection count
  return (
    <MainLayout>
      <div className={styles.main}>
        {/* <Navbar /> */}
        <div className={styles.title}>Gallery</div>
        <div className={styles.subtitle}>2022</div>
        <Gallery />
        <div className={styles.subtitle}>2021</div>
        <Gallery />
      </div>
    </MainLayout>
  );
}
