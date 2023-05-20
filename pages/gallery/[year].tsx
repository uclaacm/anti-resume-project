import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import IDCard from '../../components/IDCard';
import MainLayout from '../../components/MainLayout';
import {
  MIN_GRAD_YEAR,
  MAX_GRAD_YEAR,
  SECONDS_IN_ONE_DAY,
} from '../../util/constants';
import { getPeople } from '../../util/sheets';
import { Resume } from '../../util/types';

interface GalleryProps {
  people: Resume[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from(Array(MAX_GRAD_YEAR - MIN_GRAD_YEAR + 1).keys()).map(
      (x) => ({ params: { year: (MIN_GRAD_YEAR + x).toString() } }),
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GalleryProps> = async (context) => {
  const people = await getPeople(parseInt(context.params!.year as string));
  return {
    props: {
      people,
    },
    revalidate: SECONDS_IN_ONE_DAY,
  };
};

export default function Gallery2022Page({ people }: GalleryProps) {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <p className="text-3xl mb-5">Gallery for {router.query.year}</p>
        <ul className="flex flex-wrap justify-center gap-5">
          {people.map((resume, index) => (
            <li key={index}>
              <IDCard resume={resume} />
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
