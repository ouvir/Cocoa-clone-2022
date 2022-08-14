import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMusic,
  faGear,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Chats() {
  return (
    <div>
      <header className="screen_header">
        <h1 className="screen_header__title">Chats</h1>
        <div className="screen_header__icons">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <span>
            <FontAwesomeIcon icon={faCommentDots} size="lg" />
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
      <main className="main_screen">
        <Link to="/chat">
          <div className="user_component">
            <div className="user_component__column">
              <img
                src="img/cocoa.jpg"
                className="user_component__avatar user_component__avatar"
                alt=""
              />
              <div className="user_component__text">
                <h4 className="user_component__title__sm">Cocoa</h4>
                <h6 className="user_component__subtitle__sm">
                  Please check My Cocoa Account Info
                </h6>
              </div>
            </div>
            <div className="user_component__column">
              <span className="user_component__time">21:22</span>
              <div className="badge">1</div>
            </div>
          </div>
        </Link>
        <div>
          <div className="user_component">
            <div className="user_component__column">
              <img
                src="img/KakaoTalk_20220728_144817230.jpg"
                className="user_component__avatar user_component__avatar"
                alt=""
              />
              <div className="user_component__text">
                <h4 className="user_component__title__sm">Alinker('Me')</h4>
                <h6 className="user_component__subtitle__sm">1</h6>
              </div>
            </div>
            <div className="user_component__column"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Chats;
