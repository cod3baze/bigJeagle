import Head from "next/head";

import { Header } from "../components/Header";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>BigJeagle</title>
        <meta name="description" content="Search book from your fav artist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.container}>
        <Header />
      </div>
    </>
  );
}
