import { useEffect, useState } from "react";

function Clock() {
  const [clock, setClock] = useState("");

  function mainClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setClock(`${hours}:${minutes}`);
  }

  useEffect(() => {
    mainClock();
    setInterval(mainClock, 1000);
  }, []);

  return <span>{clock}</span>;
}

export default Clock;
