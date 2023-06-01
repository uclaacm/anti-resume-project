import type { GetStaticProps } from 'next';
import Link from 'next/link';
import IDCard from '../components/IDCard';
import MainLayout from '../components/MainLayout';
import { SECONDS_IN_ONE_DAY } from '../util/constants';
import { getPeople } from '../util/sheets';
import { Resume } from '../util/types';

interface GalleryProps {
  people: Resume[];
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

export default function Home({ people }: GalleryProps) {
  return (
    <MainLayout>
      <div className="max-w-screen flex flex-col items-center">
        <div className="text-center text-4xl font-bold my-5 lg:text-8xl ">
          <span className="text-red-500">anti-</span>resume
        </div>
        <div className="flex gap-10 mb-5">
          <Link href="/addResume">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create an anti-resume!
            </button>
          </Link>
        </div>
          <div className="w-screen flex justify-start lg:justify-center gap-10 mb-5 overflow-x-auto">
            {Array.from(Array(7).keys()).map((x) => (
              <Link key={x} href={`/gallery/${2020 + x}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {2020 + x}
                </button>
              </Link>
            ))}
          </div>
        <ul className="max-w-screen flex flex-wrap justify-center gap-5">
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
/*
<Image
  src="/acm-logo-wordmark-extended.png"
  width={132}
  height={50}
/>*/
