import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import stylesH from "../styles/Home.module.css";

export default function PageLayout({
  children,
  title = "new Page",
  desc = "description default",
}) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <h1 className={styles.title}>
            next.js<small style={{ fontSize: "10px" }}> app práctica</small>
          </h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">HOME</Link>
            </li>
            <li className={styles.item}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={styles.item}>
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={stylesH.main}>{children}</main>
    </>
  );
}