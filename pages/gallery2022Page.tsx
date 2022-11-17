import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';
import { SECONDS_IN_ONE_DAY } from '../util/constants';
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
        <ul>
          {people.map((p, index) => (
            <li key={index}>
              {p.name},{p.year},{p.dateModified},{people[index].rejections},
              {people[index].regrets},{people[index].imageLink}
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
