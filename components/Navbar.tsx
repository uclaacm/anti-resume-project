import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import WordmarkLogo from '../public/acm-logo-wordmark-extended.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className="force-child-display-block">
            <Image
              src={WordmarkLogo}
              width={106}
              height={40}
              alt="Open Source at ACM Home"
            />
          </a>
        </Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-link">
          <Link href="/galleryPage">Gallery</Link>
        </div>
        <div className="navbar-link">
          <Link href="/aboutPage">About</Link>
        </div>
      </div>
    </nav>
  );
}
