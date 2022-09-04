import Link from 'next/link';
import React from 'react';
// import pf from '/Users/soliavalentine/anti-resume-project/public/snoop.jpeg';
// import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import YearArray from '../components/yearArray';
import styles from '../styles/gallery.module.css';
const GalleryPage = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Link href="/">
          <button className={styles.button}>{'<'} back</button>
        </Link>
        <h1 className={styles.description}>gallery</h1>
        <h2 id={styles.year} className={styles.description}>2022</h2>
        <YearArray />
        <div className={styles.center}>
        <Link href="/">
          <button className={styles.createbutton}>Create Your Own!</button>
        </Link>
        </div>
      </div>
    </MainLayout>
  );
};
export default GalleryPage;