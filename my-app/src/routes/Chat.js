import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faMagnifyingGlass,
  faBars,
  faSquarePlus,
  faFaceGrin,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StatusBar from "../components/StatusBar";
import styles from "./Chat.module.css";

function Chat() {
  return (
    <div>
      <StatusBar className={styles.chat_bar} />
      <header className={`alt_header ${styles.chat}`}>
        <div className="alt_header__column">
          <Link to="/home">
            <FontAwesomeIcon icon={faAngleLeft} size="xl" />
          </Link>
        </div>
        <div className="alt_header__column">
          <h1 className="alt_header__title">Cocoa</h1>
        </div>
        <div className="alt_header__column">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </span>
        </div>
      </header>
      <main className={`main_screen ${styles.chat_screen} ${styles.main_chat}`}>
        <div className={styles.chat__timestamp}>Tuesday, June 30, 2020</div>
        <div className={styles.message_row}>
          <img
            className="user_component__avatar user_component__avatar__sm"
            src="img/cocoa.jpg"
            alt="#"
          />
          <div className={styles.message_row__content}>
            <span className={styles.message__author}>Cocoa</span>
            <div className={styles.message__info}>
              <span className={styles.message__bubble}>Hi!</span>
              <span className={styles.message__time}>21:27</span>
            </div>
          </div>
        </div>
        <div className={`${styles.message_row} ${styles.message_row__own}`}>
          <div className={styles.message_row__content}>
            <div className={styles.message__info}>
              <span className={styles.message__bubble}>What's up?</span>
              <span className={styles.message__time}>21:27</span>
            </div>
          </div>
        </div>
      </main>
      <form className={styles.reply}>
        <div className={styles.reply__column}>
          <FontAwesomeIcon icon={faSquarePlus} size="lg" />
        </div>
        <div className={styles.reply__column}>
          <input type="text" placeholder="Write a message..." />
          <FontAwesomeIcon icon={faFaceGrin} size="lg" />
          <button>
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Chat;
