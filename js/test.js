const output = document.querySelector("div");

function getCharge() {
  navigator
    .getBattery()
    .then((event) =>
      event.charging
        ? (output.style.display = "none")
        : (output.style.display = "flex")
    );
}
getCharge();
