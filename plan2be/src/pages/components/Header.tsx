import Link from "next/link";
import styles from "styles/components/Header.module.css";
import MainButton from "components/buttons/MainButton";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.link}>
            <h2>Mihailovkill</h2>
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.buttons}>
            <MainButton text="Account" href="/account" />
            <MainButton text="Forum" href="/forum" />
            <MainButton text="Snippets" href="/snippets" />
            <MainButton text="Todos" href="/todos" />
          </div>
        </nav>
      </header>
    </>
  );
}
