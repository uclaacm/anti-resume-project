import Link from 'next/link';
import React from 'react';
import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function Gallery2022Page() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.description}>2022 gallery is here</h1>
        <IDCard name="Edmond" year={2024} bio="this is my bio"></IDCard>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
