import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faEllipsis,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import {
  faUser as faUser2,
  faComment as faComment2,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./NavBar.module.css";
import { useState } from "react";

function NavBar() {
  const [index, setIndex] = useState("0");
  const onClick = (event) => {
    setIndex(event.currentTarget.value);
  };
  return (
    <nav className={styles.nav}>
      <ol className={styles.nav__list}>
        <li className={styles.nav__btn}>
          <button className={styles.nav__link} onClick={onClick} value={0}>
            {index === "0" ? (
              <FontAwesomeIcon icon={faUser} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faUser2} size="2x" />
            )}
          </button>
        </li>
        <li className={styles.nav__btn}>
          <button className={styles.nav__link} onClick={onClick} value={1}>
            <span className={styles.nav__notification}>1</span>
            {index === "1" ? (
              <FontAwesomeIcon icon={faComment} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faComment2} size="2x" />
            )}
          </button>
        </li>
        <li className={styles.nav__btn}>
          <button className={styles.nav__link} onClick={onClick} value={2}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </button>
        </li>
        <li className={styles.nav__btn}>
          <button className={styles.nav__link} onClick={onClick} value={3}>
            <div className={styles.nav__notification_dot}></div>
            <FontAwesomeIcon icon={faEllipsis} size="2x" />
          </button>
        </li>
      </ol>
    </nav>
  );
}

export default NavBar;
