import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import "./styles.css";
function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
