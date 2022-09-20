import styles from './MFooter.module.scss'
export default function Footer({ children }) {
  return (
    <footer className={styles.mfooter}>
      {children}
    </footer>
  );
}

