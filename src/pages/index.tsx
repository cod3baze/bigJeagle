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
        </main>
      </div>
    </>
  );
}
