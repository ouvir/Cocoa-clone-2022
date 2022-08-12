import { Link } from "react-router-dom";
import "./Login.module.css";
import styles from "./Login.module.css";

function Login(props) {
  return (
    <div>
      <header className={styles.welcome_header}>
        <img
          className={styles.welcome_header__img}
          src="img/cocoa.jpg"
          alt="#"
        />
        <h1 className={styles.welcome_header__title}>Welcome to Cocoa Clone</h1>
        <p className={styles.welcome_header__text}>
          If you have a Cocoa Account, log in with your email or phone number.
        </p>
      </header>

      <form method="get" className={styles.login_form}>
        <input
          className={styles.login_form__input}
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className={styles.login_form__input}
          type="password"
          placeholder="Password"
        />
        <Link to="/home">
          <input
            className={styles.login_form__btn}
            type="submit"
            value="Log In"
          />
        </Link>
        <span className={styles.login_form__a}>
          Find Cocoa Account or Password
        </span>
      </form>
    </div>
  );
}

export default Login;
