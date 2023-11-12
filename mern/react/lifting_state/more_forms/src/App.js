import React from "react";
import "./App.css";
import react, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <Form value={state} setValue={setState} />
    </div>
  );
}

export default App;
