import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import im from '../images/acm-logo.png';
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
    <Link href={`/resume/${resume.year}/${resume.email.split('@')[0]}`}>
      <div className="flex flex-col w-80 h-80 bg-white cursor-pointer truncate">
        <div className="flex items-center m-4">
          {resume.imageLink && resume.imageLink.startsWith('https://') ? (
            <Image
              className="rounded-full"
              src={resume.imageLink}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          ) : (
            <Image
              className="rounded-full"
              src={im}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          )}
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
