import React from 'react';
import styles from '../styles/Home.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <span className={styles.author}>made with ♡ by ACM at UCLA</span>
        <span className={styles.inspo}>
          Inspired by The Anti-Resume Project at University of Pennsylvania
        </span>
      </div>
    </footer>
  );
}
