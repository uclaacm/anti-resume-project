import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/gallery.module.css';
const CreatePage = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Link href="/">
          <button className={styles.button}>{'<'} back</button>
        </Link>
        <h1 className={styles.description}>create</h1>
        <div className={styles.center}>
          <Link href="/">
            <button className={styles.createbutton}>Submit</button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};
export default CreatePage;
