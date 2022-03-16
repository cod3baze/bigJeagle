import Head from "next/head";

import { Footer } from "../components/Footer";
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

        <main id={styles.main}>
          <section className={styles.heading}>
            <h1>See artist schedules</h1>
            <p>
              BigJeagle é a forma mais fácil de ver e buscar as agendas
              <br /> de seus artistas favoritos & more.
            </p>
            <div>
              <button className={styles.signup}>Sign up</button>
              <button className={styles.login}>Login</button>
            </div>
          </section>

          <section className={styles.artists}>
            <div className={styles.artistGroup}>
              <h2>Recently booked</h2>

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
