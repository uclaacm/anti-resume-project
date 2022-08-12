import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Starter ACM Project Using <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This starter project has a couple things:
        </p>

        <ul className="description-list">
          <li>
            uses next layout with a navbar and footer to demonstrate making
            pages
          </li>
          <li>
            contains multiple pages to demonstrate next page router navigation
          </li>
          <li>
            utilizes github actions and linting to maintain consistent code
            standards
          </li>
          <li>
            harnesses westwood css for some baseline css added by default in
            acm&apos;s guidelines
          </li>
        </ul>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>About ACM &rarr;</h2>
            <p>Learn more about ACM and what we do</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Learn Next.js &rarr;</h2>
            <p>Learn about the Next.js framework</p>
          </a>

          <a
            href="https://github.com/uclaacm/WestwoodCSS"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Westwoood CSS &rarr;</h2>
            <p>Check out the Westwood CSS framework</p>
          </a>

          <a
            href="https://eslint.org/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Why Linting &rarr;</h2>
            <p>Learn about eslint and how we lint code</p>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
