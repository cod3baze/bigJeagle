import Head from "next/head";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

        <main>
          <section className={styles.artists}>
            <div className={styles.artistGroup}>
              <h2>Artists</h2>

              <div className={styles.cards}>
                <div className={styles.card}>
                  <img src="https://github.com/eliasallex.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="https://github.com/diego3g.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="https://github.com/maykbrito.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="https://github.com/mebjas.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="https://github.com/torvalds.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
                <div className={styles.card}>
                  <img src="https://github.com/Pipas.png" alt="artist" />
                  <div className="card-content">
                    <h3>Elias alexandre</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
