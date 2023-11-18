import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      {/* <Link to="/products/create">Add a product</Link> */}
      <Link to="/">Home</Link>
      <Routes>
        {/* Redirect the Dashboard to the /products page */}
        <Route path="/" element={<Navigate to="/products" />} />

        {/* Create formInput */}
        <Route path="/products/create" element={<Create />} />

        {/* Dashboard */}
        <Route path="/products" element={<Main />} />

        {/* Read One */}
        <Route path="/Products/:id" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
