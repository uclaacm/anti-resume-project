import { style } from '@mui/system';
import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <MainLayout>
      <>
        <div className={styles.content}>
          <h1 className={styles.subheading}>Background</h1>
          <p className={styles.description}>
            You are more than your resume. The goal of Anti-Resume is to provide
            a platform that showcases the failures and accomplishments of Bruins
            from all backgrounds. We at ACM aim to normalize discussions of
            failure and imposter syndrome and promote a campus community where
            everyone can thrive.
          </p>
          <h1 className={styles.subheading}>
            How can I contribute my Anti-Resume?
          </h1>
          <Link href="/addResume">
            <button className={styles.btn}>Add your anti-resume</button>
          </Link>
          <h1 className={styles.subheading}>Reach out!</h1>
          <Link href="/">
            <button className={styles.btn}>view all</button>
          </Link>
        </div>
        <Footer />
      </>
    </MainLayout>
  );
}
