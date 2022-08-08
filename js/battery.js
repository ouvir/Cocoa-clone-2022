const percentage = document.querySelector("#battery_level");
const chargeIcon = document.querySelector("#charge_icon");
const batteryIcon = document.querySelector("#battery_level_icon");

function getBatteryStatus() {
  getBatteryLevel();
  getCharge();
}

async function getBatteryLevel() {
  if (!navigator.getBattery) {
    return 0;
  }
  const manager = await navigator.getBattery();
  const level = manager.level * 100;
  percentage.textContent = `${level}%`;
  batteryIcon.classList.remove(
    "fa-battery-empty",
    "fa-battery-quarter",
    "fa-battery-half",
    "fa-battery-three-quarters",
    "fa-battery-full"
  );
  if (level >= 87.5) {
    batteryIcon.classList.add("fa-battery-full");
  } else if (level >= 62.5) {
    batteryIcon.classList.add("fa-battery-three-quarters");
  } else if (level >= 37.5) {
    batteryIcon.classList.add("fa-battery-half");
  } else if (level >= 12.5) {
    batteryIcon.classList.add("fa-battery-quarter");
  } else {
    batteryIcon.classList.add("fa-battery-empty");
  }
}

function getCharge() {
  navigator
    .getBattery()
    .then((event) =>
      event.charging
        ? (chargeIcon.style.display = "flex")
        : (chargeIcon.style.display = "none")
    );
}

getBatteryStatus();
setInterval(getBatteryStatus, 1000);
