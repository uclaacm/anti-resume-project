import Link from 'next/link';
import React from 'react';
import ResumeCard from '../components/ResumeCard';
import styles from '../styles/resumeView.module.css';
// import { Resume } from '../util/types';

// interface GalleryProps {
//   people: Resume[];
// }

// interface ResumeViewProps {
// }

export default function ResumeViewPage() {
  return (
    <div className={styles.main}>
      <Link href="/">
        <button className={styles.button}>{'<'} back</button>
      </Link>
      <ResumeCard />
      <h1 className={styles.description}>hello</h1>
    </div>
  );
}
