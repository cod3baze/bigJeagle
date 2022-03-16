import Head from "next/head";
import { Header } from "../components/Header";

import styles from "../styles/pages/Home.module.scss";

export default function Search() {
  return (
    <>
      <Head>
        <title>Pesquise por artista | BigJeagle</title>
        <meta
          name="description"
          content="Pesquise schedules from your fav artist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.container}>
        <Header disableSearchRedirect />

        <main></main>
      </div>
    </>
  );
}
