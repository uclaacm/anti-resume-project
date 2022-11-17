import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.subheading}>Background</h1>
          <p className={styles.description}>
            You are more than your resume. The goal of Anti-Resume is to provide
            a platform that showcases the failures and accomplishments of Bruins from all backgrounds. We at ACM aim to normalize discussions of
            failure and imposter syndrome and promote a campus community where
            everyone can thrive.
          </p>
        </div>

        <h1 className={styles.subheading}>
          How can I contribute my Anti-Resume?
        </h1>
        <a
          href="https://forms.gle/jGuKbj1pgnXWq3T77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.btn}>Add your anti-resume</button>
        </a>
        <h1 className={styles.subheading}>Reach out!</h1>
        <Link href="/">
          <button className={styles.btn}>view all</button>
        </Link>
      </div>
    </MainLayout>
  );
}
