import styles from "./NoShow.module.css";

const NoShow = () => {
  return (
    <div id={styles.no_mobile}>
      <img src="img/cocoa.jpg" alt="" />
      <span>Your screen is too big (; ･`д･´)</span>
    </div>
  );
};

export default NoShow;
