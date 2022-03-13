import Head from "next/head";

import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>BigJeagle</title>
        <meta name="description" content="Search book from your fav artist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>eliasallex</h1>
      </div>
    </>
  );
}
