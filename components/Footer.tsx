import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        made by{' '}
        <Link
          href="https://www.uclaacm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM at UCLA
        </Link>
        , with{' '}
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>
      </span>
    </footer>
  );
}
