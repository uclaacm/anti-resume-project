import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import getPeople from '../util/sheets';
import { Resume } from '../util/types';

interface GalleryProps {
  people: Resume[];
}

export default function Gallery2022Page({ people }: GalleryProps) {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.description}>2022 gallery is here</h1>
        <p>
          {people[0].user}
          {people[0].year}
          {people[0].dateModified}
          {people[0].toInforms[0]}
          {people[0].iHave[0]}
          {people[0].image}
        </p>
        <Link href="/">
          <button>Go back home</button>
        </Link>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const people = await getPeople();
  return {
    props: {
      people,
    },
    revalidate: 3600,
  };
};
