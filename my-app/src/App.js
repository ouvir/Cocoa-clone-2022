import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoShow from "./components/NoShow";
import Login from "./routes/Login";
import Home from "./routes/Home";
import "./styles.css";

function App() {
  const [size, setSize] = useState(0);
  window.onresize = (event) => {
    setSize(window.innerWidth);
  };
  return (
    <div className="main">
      {size >= 800 ? (
        <NoShow />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
