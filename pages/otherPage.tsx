import Link from 'next/link';
import React from 'react';
import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function OtherPage() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.description}>
          Here&apos;s another page you can navigate to using the navbar!
        </h1>
        <IDCard
          image="/public/snoop.jpeg"
          year={2022}
          name="condoleeza rice"
          bio="failed :/"
        />
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
