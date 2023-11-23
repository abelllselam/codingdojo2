import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Update from "./components/Update";
import Display from "./components/Display";

function App() {
  const location = useLocation();

  const appHeader = {
    display: "flex",
    justifyContent: "space-around",
  };
  const spaceLeft = {
    marginRight: "350px",
  };

  return (
    <div className="App">
      {location.pathname === "/" && (
        <div style={appHeader}>
          <h1>Pet Shelter</h1>
          <Link to="/pets/new">add a pet to the shelter</Link>
        </div>
      )}
      {location.pathname === "/" && (
        <h3 style={spaceLeft}>These pets are looking for a good home</h3>
      )}
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Main />} />

        {/* Create new pet info in the shelter */}
        <Route path="/pets/new" element={<Create />} />

        {/* Update a pet's information using the id*/}
        <Route path="/pets/:id/new" element={<Update />} />

        {/* Display one pet */}
        <Route path="/pets/:id" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
