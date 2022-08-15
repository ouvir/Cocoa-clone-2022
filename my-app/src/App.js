import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoShow from "./components/NoShow";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Settings from "./routes/Settings";
import Chat from "./routes/Chat";
import "./styles.css";

function App() {
  if (window.location.pathname === "/chat-cocoa") {
    const HTML = document.body.parentNode;
    HTML.className = "chat";
  }
  const [size, setSize] = useState(0);
  window.onresize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  return (
    <div className="main">
      {size >= 800 ? (
        <NoShow />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/chat-:username" element={<Chat />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
