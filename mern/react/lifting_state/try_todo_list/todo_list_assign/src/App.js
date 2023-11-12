import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [formInfo, setFormInfo] = useState([
    { name: "abcd", isComplete: false },
  ]);

  return (
    <div className="App">
      <Form formInfo={formInfo} setFormInfo={setFormInfo} />
      <Display formInfo={formInfo} setFormInfo={setFormInfo} />
    </div>
  );
}

export default App;
