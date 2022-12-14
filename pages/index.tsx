import type { NextPage } from 'next';
// import ACMLogo from '../images/acm-logo.png';
import Image from 'next/image';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

const arr = Array.from({length: 3}).fill(6);
function Gallery() {
  return (
    <div className={styles.gallery}>
      {arr.map((item, index) => (
        <IDCard key={index} name="RJ Maokhamphiou" year={2022} />
      ))}
    </div>
  );
}

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
              <LinkButton title="Create" href="/addResume" />
              <LinkButton title="View All" href="gallery2022Page" />
            </div>
          </div>
        </div>
        <Gallery />
        <Footer />
      </>
    </MainLayout>
  );
};

export default Home;
