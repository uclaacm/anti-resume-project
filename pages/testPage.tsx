import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function Test() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.description}>
          Here&apos;s yet another test page you can navigate to using the
          navbar!
        </h1>
        <Link href="/">
          <button>Goto home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
