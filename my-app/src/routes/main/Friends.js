import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMusic,
  faGear,
  faCircleInfo,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Friends.module.css";
function Friends() {
  return (
    <div className={styles.friends}>
      <header className="screen_header">
        <h1 className="screen_header__title">Friends</h1>
        <div className="screen_header__icons">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faMusic} size="lg" />
          </span>
          <span className={styles.gear__notification}>
            <Link to="/settings">
              <FontAwesomeIcon icon={faGear} size="lg" />
            </Link>
            <span
              className={"screen_header__notification__dot badge_dot"}
            ></span>
          </span>
        </div>
      </header>

      <div id={styles.friends_display_link}>
        <FontAwesomeIcon icon={faCircleInfo} />
        Friends'Names Display
        <FontAwesomeIcon icon={faChevronRight} size="xs" />
      </div>

      <main className={styles.friends_screen}>
        <div className="user_component">
          <div className="user_component__column">
            <img
              src="img/KakaoTalk_20220728_144817230.jpg"
              className={"user_component__avatar user_component__avatar__xl"}
              alt="#"
            />
            <div className="user_component__text">
              <h4 className="user_component__title">Alinker</h4>
              <h6 className="user_component__subtitle">this text whatever</h6>
            </div>
          </div>
          <div className="user_component__column"></div>
        </div>
        <div className={styles.friends_screen__box}>
          <div className={styles.friends_screen__header}>
            <span>Channel</span>
            <FontAwesomeIcon icon={faChevronUp} size="xs" />
          </div>
          <div className="user_component">
            <div className="user_component__column">
              <img
                src="img/cocoa.jpg"
                className={"user_component__avatar user_component__avatar__sm"}
                alt="#"
              />
              <div className="user_component__text">
                <h4
                  className={
                    "user_component__title user_component__title__not_bold"
                  }
                >
                  Channel
                </h4>
              </div>
            </div>
            <div className="user_component__column">
              <div>
                <span>2</span>
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.friends_screen__box}>
          <div className={styles.friends_screen__header}>
            <span>Friends</span>
            <FontAwesomeIcon icon={faChevronUp} size="xs" />
          </div>
          <div className={styles.user_componen}>
            <div className="user_component__column">
              <img
                src="img/KakaoTalk_20220728_144817230.jpg"
                className="user_component__avatar user_component__avatar__sm"
                alt="#"
              />
              <div className="user_component__text">
                <h4 className="user_component__title user_component__title__not_bold">
                  Me
                </h4>
                <h6>well played!</h6>
              </div>
            </div>
            <div className="user_component__column"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Friends;
