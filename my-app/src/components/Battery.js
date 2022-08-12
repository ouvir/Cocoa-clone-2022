import {
  faBolt,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
function Battery() {
  const [level, setLevel] = useState(100);
  const [isCharge, setIsCharge] = useState(false);

  const getBatteryLevel = async () => {
    if (!navigator.getBattery) {
      return 0;
    }
    const manager = await navigator.getBattery();
    setLevel(manager.level * 100);
  };

  const getCharge = () => {
    navigator
      .getBattery()
      .then((event) =>
        event.charging ? setIsCharge(true) : setIsCharge(false)
      );
  };
  useEffect(() => {
    getBatteryLevel();
    setInterval(getBatteryLevel, 2000);

    getCharge();
    setInterval(getCharge, 2000);
  }, []);

  return (
    <div>
      <span id="battery_level">{level}%</span>
      {level >= 87.5 ? (
        <FontAwesomeIcon id="battery_level_icon" icon={faBatteryFull} />
      ) : level >= 62.5 ? (
        <FontAwesomeIcon
          id="battery_level_icon"
          icon={faBatteryThreeQuarters}
        />
      ) : level >= 37.5 ? (
        <FontAwesomeIcon id="battery_level_icon" icon={faBatteryHalf} />
      ) : level >= 12.5 ? (
        <FontAwesomeIcon id="battery_level_icon" icon={faBatteryQuarter} />
      ) : (
        <FontAwesomeIcon id="battery_level_icon" icon={faBatteryEmpty} />
      )}
      {isCharge ? <FontAwesomeIcon id="charge_icon" icon={faBolt} /> : null}
    </div>
  );
}
export default Battery;
