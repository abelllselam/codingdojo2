import "./App.css";
import Home from "./components/Home";
import NewStr from "./components/NewStr";
import Num from "./components/Num";
import { Link, Routes, Route } from "react-router-dom";
import StrColor from "./components/StrColor";

function App() {
  return (
    <div className="App">
      <p>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:num(\d+)" element={<Num />} />
          <Route path="/:newStr" element={<NewStr />} />
          <Route path="/:strColor/:wColor/:bgColor" element={<StrColor />} />
        </Routes>
      </p>
    </div>
  );
}

export default App;
