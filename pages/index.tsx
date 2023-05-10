import type { NextPage } from 'next';
// import ACMLogo from '../images/acm-logo.png';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <>
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
              <Link href="/addResume"><CustomButton title="create"></CustomButton></Link>
              <Link href="/gallery2022Page"><CustomButton title="view all"></CustomButton></Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </MainLayout>
  );
};

export default Home;
