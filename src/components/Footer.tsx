import Link from "next/link";
import { FiInstagram, FiChevronUp } from "react-icons/fi";

import { MyAnchorToLogo } from "./MyAnchorToLogo";

import styles from "../styles/components/Footer.module.scss";

import bigJeagleLogo from "../../public/assets/big-jeagle.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/" passHref>
              <MyAnchorToLogo
                className={styles.logo}
                draggable={false}
                src={bigJeagleLogo}
                alt="Big Jeagle logo"
              />
            </Link>
            <span>
              &copy; Genesis 2022 <br /> All rights reserved.
            </span>
          </div>

          <nav className={styles.right}>
            <ul>
              <span>Maling Address</span>
              <li>
                <p className={styles.fText}>BRAZIL, SP-Campinas Hortolândia</p>
              </li>
            </ul>

            <ul>
              <span>Genesis systems</span>
              <li>
                <a href="#about">Sobre nós</a>
              </li>
              <li>
                <a href="/about-us#services">Serviços</a>
              </li>
            </ul>

            <ul>
              <span>Fala com a gente</span>
              <li>
                <a href="https://wa.me/5519982293701?text=ajuda">
                  +55 (19) 983-5723-49
                </a>
              </li>
              <li>
                <a href="mailto:oi@cognu.co">oi@cognu.co</a>
              </li>
              <li>
                <p>24-hour service</p>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.socialContainer}>
            <a
              href="https://www.instagram.com/genesis.cognu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
          </div>

          <a href="#bigJeagle" type="button">
            <FiChevronUp size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
