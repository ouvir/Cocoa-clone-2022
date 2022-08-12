import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from "./Clock";
import Battery from "./Battery";
import styles from "./StatusBar.module.css";
function StatusBar() {
  return (
    <div className={styles.status_bar}>
      <div className={styles.status_bar__column}>
        <span>No Service</span>
        <FontAwesomeIcon icon={faWifi} />
      </div>
      <div className={styles.status_bar__column}>
        <Clock />
      </div>
      <div className={styles.status_bar__column}>
        <Battery />
      </div>
    </div>
  );
}
export default StatusBar;
