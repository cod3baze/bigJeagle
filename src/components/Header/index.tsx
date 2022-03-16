import NextLink from "next/link";
import { FiSearch } from "react-icons/fi";

import { Products } from "./Dropdowns/Products";
import { MoreOptions } from "./Dropdowns/MoreOptions";

import styles from "../../styles/components/Header.module.scss";

interface HeaderProps {
  disableSearchRedirect?: boolean;
}

export function Header({ disableSearchRedirect = false }: HeaderProps) {
  return (
    <header id={styles.headerContainer}>
      <nav id="bigJeagle">
        <div className={styles.logoContainer}>
          <NextLink href="/dashboard" passHref>
            <a href="/dashboard">Genesis</a>
          </NextLink>
        </div>

        <div>
          {disableSearchRedirect ? (
            <form className={styles.searchForm}>
              <input
                type="search"
                id="search"
                data-target="search"
                placeholder="Search artist for book"
                autoFocus
              />
              <div className={styles.look}>
                <FiSearch size={24} color="var(--gray-300)" />
              </div>
            </form>
          ) : (
            <NextLink href="/search" passHref>
              <a>
                <form className={styles.searchForm}>
                  <input
                    type="search"
                    id="search"
                    data-target="search"
                    placeholder="Search artist for book"
                    autoFocus
                  />
                  <div className={styles.look}>
                    <FiSearch size={24} color="var(--gray-300)" />
                  </div>
                </form>
              </a>
            </NextLink>
          )}
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
