import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import OneMovie from "./components/OneMovie";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <h1>Movies 🎥🎥🎥</h1>
      <Link to="/movies/create">Add a movie</Link>
      <br />
      <Link to="/">Home</Link>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Main />} />

        {/* Read One */}
        <Route path="/movies/:id" element={<OneMovie />} />

        {/* Create */}
        <Route path="/movies/create" element={<Create />} />

        {/* update */}
        <Route path="/movies/:id/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
