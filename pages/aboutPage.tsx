import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.description}>Background</h1>
          <p>
            {' '}
            You are more than your resume. The goal of Anti-Resume is to provide
            a platform that showcases the failures and accomplishments{' '}
          </p>
          {/* of Bruins from all backgrounds. We at ACM aim to normalize discussions of
          failure and imposter syndrome and promote a campus community where
          everyone can thrive. I GOT LINTED WHATS*/}
        </div>

        <h1 className={styles.description}>
          How can I contribute my Anti-Resume?
        </h1>
        <Link href="/addResume">
          <button>Add your anti-resume</button>
        </Link>
        <h1 className={styles.description}>Reach out!</h1>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}
