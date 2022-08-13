import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faMagnifyingGlass,
  faBullhorn,
  faFlask,
  faLock,
  faCircleInfo,
  faCircleHalfStroke,
  faBrush,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Settings.module.css";

function Settings() {
  return (
    <div>
      <header className="alt_header">
        <div className="alt_header__column">
          <Link to="/home">
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </Link>
        </div>
        <div className="alt_header__column">
          <h1 className="alt_header__title">Settings</h1>
        </div>
        <div className="alt_header__column">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </div>
      </header>
      <main className={`main_screen ${styles.setting_screen}`}>
        <ul className={styles.settings_list}>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faBullhorn} />
              </span>
              <span>Notices</span>
            </div>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faFlask} />
              </span>
              <span>Cocoa Lab</span>
            </div>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faLock} />
              </span>
              <span>Privacy</span>
            </div>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span>Version</span>
            </div>
            <div className={styles.settings__setting_column}>
              Latest Version
            </div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span>Notification</span>
            </div>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <Link to="/home" className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Friends</span>
            </Link>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <Link to="/home" className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span>Chats</span>
            </Link>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faCircleHalfStroke} />
              </span>
              <span>Display</span>
              <div className="badge">N</div>
            </div>
            <div className={styles.settings__setting_column}></div>
          </li>
          <li className={styles.settings__setting}>
            <div className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faBrush} />
              </span>
              <span>Themes</span>
              <div className="badge">N</div>
            </div>
            <div className={styles.settings__setting_column}>Default theme</div>
          </li>
          <li className={styles.settings__setting}>
            <Link to="/" className={styles.settings__setting_column}>
              <span>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              <span>Log out</span>
            </Link>
            <div className={styles.settings__setting_column}></div>
          </li>
        </ul>
      </main>
    </div>
  );
}
export default Settings;
