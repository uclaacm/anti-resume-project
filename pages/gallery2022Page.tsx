import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import IDCard from '../components/idcard';
import MainLayout from '../components/MainLayout';
import Navbar from '../components/Navbar';
import galleryStyles from '../styles/Gallery.module.scss';
import styles from '../styles/Home.module.scss';
import { SECONDS_IN_ONE_DAY } from '../util/constants';
import getPeople from '../util/sheets';
import { Resume } from '../util/types';

interface GalleryProps {
  people: Resume[];
}

export default function Gallery2022Page({ people }: GalleryProps) {
  // TODO: 1. sort idcards by year
  return (
    <MainLayout>
      <div className={styles.main}>
        <Navbar />
        <h1 className={galleryStyles.title}>gallery</h1>
        <h1 className={galleryStyles.subtitle}>2022</h1>
        <ul className={galleryStyles.gallery}>
          {people.map((p, index) => (
            <li key={index}>
              <IDCard name={p.name} year={p.year} />
            </li>
          ))}
        </ul>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const people = await getPeople(2022);
  return {
    props: {
      people,
    },
    revalidate: SECONDS_IN_ONE_DAY,
  };
};
