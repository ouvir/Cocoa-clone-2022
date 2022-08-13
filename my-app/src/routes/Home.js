import StatusBar from "../components/StatusBar";
import NavBar from "../components/NavBar";
import { useState } from "react";
function Home() {
  const [main, setMain] = useState();
  const getIndex = (data) => {
    setMain(data);
  };
  return (
    <div>
      <StatusBar />
      <NavBar getIndex={getIndex} />
    </div>
  );
}
export default Home;
