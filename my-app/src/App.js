import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import NoShow from "./components/NoShow";
import "./styles.css";

function App() {
  const [size, setSize] = useState(0);
  window.onresize = (event) => {
    setSize(window.innerWidth);
  };
  console.log(size);
  return (
    <div className="main">
      {size >= 700 ? (
        <NoShow />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
