import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeBg}>
      <nav className={styles.navbar}>
        <div className={styles.logoArea}>
          <img src="/logo.png" alt="English Ready logo" width={240} height={140} className={styles.logoImg} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Offer</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main className={styles.hero}>
        <h1>Practice English<br />in English</h1>
        <p className={styles.subheadline}>
          An immersive approach for those committed<br />
          to consistent practice.
        </p>
        <button className={styles.ctaBtn}>Get started <span aria-hidden>»</span></button>
      </main>
    </div>
  );
} 