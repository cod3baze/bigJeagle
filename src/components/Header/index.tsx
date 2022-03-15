import NextLink from "next/link";
import { FiSearch } from "react-icons/fi";

import { Products } from "./Dropdowns/Products";
import { MoreOptions } from "./Dropdowns/MoreOptions";

import styles from "../../styles/components/Header.module.scss";

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
            <Products />
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
            <MoreOptions />
          </li>
        </ul>
      </nav>
    </header>
  );
}
