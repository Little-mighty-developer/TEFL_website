import Link from 'next/link';
import styles from '../styles/NotFound.module.css';

export default function Custom404() {
  return (
    <div className={styles.notFoundBg}>
      <div className={styles.rocketIcon} aria-label="rocket">🚀</div>
      <div className={styles.siteName}>ENGLISH<br />READY</div>
      <div className={styles.errorCode}>404</div>
      <div className={styles.warningIcon} aria-label="warning">⚠️</div>
      <div className={styles.message}>Oops! This page is missing</div>
      <Link href="/">
        <button className={styles.homeBtn}>Return to homepage</button>
      </Link>
    </div>
  );
} 