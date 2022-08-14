import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMusic,
  faGear,
  faQuoteRight,
  faRightFromBracket,
  faBrush,
  faFileInvoiceDollar,
  faCalendarDays,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComments,
  faFaceGrin,
  faAddressBook,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import styles from "./More.module.css";

function More() {
  return (
    <div>
      <header className="screen_header">
        <h1 className="screen_header__title">More</h1>
        <div className="screen_header__icons">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faMusic} size="lg" />
          </span>
          <span className="gear__notification">
            <Link to="/settings">
              <FontAwesomeIcon icon={faGear} size="lg" />
              <span
                className={"screen_header__notification__dot badge_dot"}
              ></span>
            </Link>
          </span>
        </div>
      </header>

      <main className={`main_screen ${styles.more_screen}`}>
        <div className="user_component">
          <div className="user_component__column">
            <img
              src="img/KakaoTalk_20220728_144817230.jpg"
              className="user_component__avatar user_component__avatar"
              alt=""
            />
            <div className="user_component__text">
              <h4 className="user_component__title">Alinker</h4>
              <h6 className="user_component__subtitle">
                qazxc155580@gmail.com
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="user_component__notification"
                />
              </h6>
            </div>
          </div>
          <div className="user_component__column">
            <FontAwesomeIcon icon={faMessage} size="2x" />
          </div>
        </div>
        <div className="icon_row">
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faCalendarDays} />

            <span>Calendar</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faAddressBook} />

            <span>Talk Drive</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faFaceGrin} />

            <span>Emoticons</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faBrush} />
            <span>Themes</span>
          </div>
        </div>
        <div className="icon_row">
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />

            <span>Account</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faComments} />

            <span>Openchat</span>
          </div>
          <Link to="/" className="icon_row__icon">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Log out</span>
          </Link>
          <div className="icon_row__icon"></div>
        </div>
      </main>

      <div className={styles.more_suggestions}>
        <h4 className={styles.more_suggestions__title}>Suggestions</h4>
        <div className={styles.more_suggestions__icons}>
          <div className={styles.more_suggestions__icon}>
            <div className={styles.more_suggestions__icon_image}>
              <FontAwesomeIcon icon={faQuoteRight} size="xl" />
            </div>
            <span className={styles.more_suggestions__icon_text}>
              Cocoa Story
            </span>
          </div>
          <div className={styles.more_suggestions__icon}>
            <div className={styles.more_suggestions__icon_image}>
              <FontAwesomeIcon icon={faQuoteRight} size="xl" />
            </div>
            <span className={styles.more_suggestions__icon_text}>
              Cocoa Story
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default More;
