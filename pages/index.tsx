import type { NextPage } from 'next';
// import ACMLogo from '../images/acm-logo.png';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.mainlanding}>
        <div className={styles.headerarea}>
          <Image
            src="/acm-logo-wordmark-extended.png"
            width={132}
            height={50}
          />
          <div className={styles.headertext}>
            <span className={styles.anti}>anti</span> resume
          </div>
          <div className={styles.buttonarea}>
            <CustomButton title='Create'/>
            <CustomButton title='View All'/>
          </div>
        </div>
        <p>this is the landing page</p>
      </div>
    </MainLayout>
  );
};

export default Home;
