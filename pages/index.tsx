import type { NextPage } from 'next';
// import ACMLogo from '../images/acm-logo.png';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles['main-landing']}>
        <div className={styles['header-area']}>
          <Image
            src="/acm-logo-wordmark-extended.png"
            width={131}
            height={60}
          />
          <p>
            <span>anti</span> resume
          </p>
          <div className={styles['button-area']}>
            <CustomButton />
            <CustomButton />
          </div>
        </div>
        <p>this is the landing page</p>
      </div>
    </MainLayout>
  );
};

export default Home;
