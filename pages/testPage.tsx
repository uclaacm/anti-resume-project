import React from 'react';
import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

export default function Test() {
  //TODO: add regret count
  //TODO: add rejection count
  return (
    <MainLayout>
      <div className={styles.main}>
        <IDCard name="Harvey Zhao" year={2022} />
      </div>
    </MainLayout>
  );
}
