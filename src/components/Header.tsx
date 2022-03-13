import NextLink from "next/link";
import { FiChevronDown, FiChevronsDown, FiSearch } from "react-icons/fi";

import styles from "../styles/components/Header.module.scss";

export function Header() {
  return (
    <header id={styles.headerContainer}>
      <nav>
        <div className={styles.logoContainer}>
          <NextLink href="/dashboard" passHref>
            <a href="/dashboard">Genesis</a>
          </NextLink>
        </div>

        <div>
          <form className={styles.searchForm}>
            <input
              type="search"
              id="search"
              data-target="search"
              placeholder="Search artist for book"
            />
            <div className={styles.look}>
              <FiSearch size={24} color="var(--gray-300)" />
            </div>
          </form>
        </div>

        <ul>
          <li>
            <button
              className={`${styles.button} ${styles.products}`}
              type="button"
            >
              <span>Products</span>
              <FiChevronDown size={24} color="var(--gray-300)" />
            </button>
          </li>
          <li>
            <button
              className={`${styles.button} ${styles.signup}`}
              type="button"
            >
              <span>Sign up</span>
            </button>
          </li>
          <li>
            <button className={styles.collapsibleButton} type="button">
              <FiChevronsDown size={24} color="var(--gray-100)" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
