import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faGear,
  faFingerprint,
  faQrcode,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import styles from "./Find.module.css";

function Find() {
  return (
    <div>
      <header className="screen_header">
        <h1 className="screen_header__title">Find</h1>
        <div className="screen_header__icons">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
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

      <main className="main_screen">
        <div className="icon_row">
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faQrcode} />
            <span>QR Code</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faAddressBook} />

            <span>Add by Contacts</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faFingerprint} />

            <span>Add by ID</span>
          </div>
          <div className="icon_row__icon">
            <FontAwesomeIcon icon={faEnvelope} />

            <span>Invite</span>
          </div>
        </div>
        <div className={styles.recommended_friends}>
          <h6 className={styles.recommended_friends__title}>
            Recommended Friends
          </h6>
          <span>You have no recommended friends.</span>
        </div>
        <div className={styles.open_chat}>
          <div className={styles.open_chat__header}>
            <h4 className={styles.open_chat__title}>Open Chat</h4>
            <span>
              Go to Openchat Home{" "}
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </span>
          </div>
          <div className={styles.open_post}>
            <div className={styles.open_post__column}>
              <h5 className={styles.open_post__title}>#DOG</h5>
              <h6 className={styles.open_post__hashtags}>
                #dog#animal#friends
              </h6>
              <div className={styles.open_post__members}>
                <img
                  className="user_component__avatar user_component__avatar--xs"
                  src="https://img.freepik.com/free-photo/cute-little-dog-isolated-on-yellow_23-2148985931.jpg?size=626&ext=jpg"
                  alt=""
                />
                <span className={styles.open_post__member_count}>
                  802 members
                </span>
                <div className={styles.divider}></div>
                <span className={styles.open_post__member_status}>Active</span>
              </div>
            </div>
            <div className={styles.open_post__column}>
              <div className={styles.open_post__photo}>
                <img
                  src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906_960_720.jpg"
                  alt=""
                />
                <div className={styles.open_post__heart_count}>
                  <FontAwesomeIcon icon={faHeart} size="xs" />
                  <span>326</span>
                </div>
                <a href="https://kr.freepik.com/photos/dog">kr.freepik.com</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Find;
