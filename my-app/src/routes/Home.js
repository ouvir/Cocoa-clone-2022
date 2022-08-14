import StatusBar from "../components/StatusBar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Friends from "./main/Friends";
import Chats from "./main/Chats";
import Find from "./main/Find";
import More from "./main/More";

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
        return <Chats />;
      case "2":
        return <Find />;
      case "3":
        return <More />;
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <StatusBar />
      <CreateMain />
      <NavBar getIndex={getIndex} />
    </div>
  );
}
export default Home;
