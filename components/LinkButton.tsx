import Link from 'next/link';
import styles from '../styles/Home.module.scss';

interface ButtonProps {
  title: string;
  href: string;
}

export default function customButton(props: ButtonProps) {
  return (
    <Link className={styles.button} href={props.href}>
      <button className={styles.buttonmain}>{props.title}</button>
    </Link>
  );
}
