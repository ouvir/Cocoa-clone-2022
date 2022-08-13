import StatusBar from "../components/StatusBar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Friends from "./main/Friends";
function Home() {
  const [main, setMain] = useState("0");
  const getIndex = (data) => {
    setMain(data);
  };
  const CreateMain = () => {
    switch (main) {
      case "0":
        return <Friends />;
      case "1":
        return <div>1</div>;
      case "2":
        return <div>2</div>;
      case "3":
        return <div>3</div>;
      default:
        return null;
    }
  };
  return (
    <div>
      <StatusBar />
      <CreateMain />
      <NavBar getIndex={getIndex} />
    </div>
  );
}
export default Home;
