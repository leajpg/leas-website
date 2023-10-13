import "./components/Styles.css";
import "./fonts/BMtoppo.ttf";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
document.body.style.backgroundColor = "#cbdbfa";

function App() {
  return (
    <div className="App">
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <darkButton />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <div>
          <Routes>
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
