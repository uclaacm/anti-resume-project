import styles from '../styles/Home.module.scss';

interface ButtonProps {
  title: string;
}

export default function customButton(props: ButtonProps) {
  return (
    <div className={styles['button']}>
      <button className={styles['button-main']}>{props.title}</button>
    </div>
  );
}
