import Link from 'next/link';
import styles from '../styles/Home.module.scss';
interface ButtonProps {
  title: string;
  url: string;
}

export default function customButton(props: ButtonProps) {
  return (
    <div className={styles.button}>
      <Link href={props.url}>
        <button className={styles.buttonmain}>{props.title}</button>
      </Link>
    </div>
  );
}
