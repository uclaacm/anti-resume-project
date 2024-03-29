import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: JSX.Element;
}

export default function MainLayout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="next acm project at ucla" />
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title>Your Next Project!</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
