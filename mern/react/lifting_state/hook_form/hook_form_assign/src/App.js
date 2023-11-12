import "./App.css";
import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [fNameErr, setFNameErr] = useState("");
  const [lName, setLName] = useState("");
  const [lNameErr, setLNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const createUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={createUser}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <p>
            {fName.length < 2 && fName.length > 0
              ? "First Name field must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
          <p>
            {lName.length < 2 && lName.length > 0
              ? "Last Name field must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>
            {email.length < 5 && email.length > 0
              ? "Email field must be at least 5 characters."
              : ""}
          </p>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            {password.length < 8 && password.length > 0
              ? "Password field must be at least 8 characters."
              : ""}
          </p>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <p>
          {password !== confirmPassword && confirmPassword.length > 0
            ? "Confirm Password field must match and at least be 8 characters."
            : ""}
        </p>
        {/* <button>Submit</button> */}
      </form>

      <p>
        <h3>Form Data:</h3>
        <p>First Name: {fName}</p>
        <p>Last Name: {lName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </p>
    </div>
  );
}

export default App;
