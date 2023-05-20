import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from '../images/samplepic.jpeg';
import { Resume } from '../util/types';

interface IDProps {
  resume: Resume;
}
//TODO: add regret count
//TODO: add rejection count
export default function IDCard({ resume }: IDProps) {
  const rejections = resume.rejections
    .split(/\r?\n/)
    .filter((str) => str !== '');
  return (
    <Link href={`/resume/${resume.year}/${resume.name}`}>
      <div className="flex flex-col w-80 h-80 bg-white cursor-pointer">
        <div className="flex items-center m-4">
          <Image
            className="rounded-full"
            src={profile}
            width="100%"
            height="100%"
            objectFit="cover"
          />
          <div className="flex flex-col mx-4">
            <p className="text-2xl">{resume.name}</p>
            <p className="font-light">Class of {resume.year}</p>
          </div>
        </div>
        <div className="flex flex-col mx-4">
          {rejections.length > 0 && (
            <div>
              <p className="font-medium">
                {rejections.length}{' '}
                {rejections.length > 1 ? 'rejections' : 'rejection'}
              </p>
              <ul className="ml-4">
                {rejections.map((rejection, index) => (
                  <li key={index}>
                    <p>{rejection}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          Click to see full!
        </div>
      </div>
    </Link>
  );
}
