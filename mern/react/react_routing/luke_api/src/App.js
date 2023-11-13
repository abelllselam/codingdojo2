import "./App.css";
import Dashboard from "./components/Dashboard";
import People from "./components/People";
import Planet from "./components/Planet";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Routes>
        <Route path="people/:id" element={<People />} />
        <Route path="planet/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
