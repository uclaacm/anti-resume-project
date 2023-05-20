import Link from 'next/link';
import React from 'react';
import MainLayout from '../components/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-3xl mb-5">About</p>
          <p className="text-xl my-2">Background</p>
          <p>
            You are more than your resume. The goal of Anti-Resume is to provide
            a platform that showcases the failures and accomplishments of Bruins
            from all backgrounds. We at ACM aim to normalize discussions of
            failure and imposter syndrome and promote a campus community where
            everyone can thrive.
          </p>
          <p className="text-xl my-2">How can I contribute my Anti-Resume?</p>
          <Link href="/addResume">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create an anti-resume!
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
