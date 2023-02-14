import Link from 'next/link';
import React from 'react';
import navbarstyle from '../styles/navbar.module.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <a className={navbarstyle.backbutton}>&larr; back</a>
        </Link>
      </div>
      <div className="navbar-items">
        <div className="navbar-link">
          <Link href="/gallery2022Page">2022</Link>
        </div>
        <div className="navbar-link">
          <Link href="/aboutPage">About</Link>
        </div>
      </div>
    </nav>
  );
}
