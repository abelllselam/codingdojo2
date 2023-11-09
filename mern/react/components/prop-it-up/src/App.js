import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const personInfo = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown",
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown",
    },
  ];

  return (
    <div className="App">
      <h1>Person Card</h1>
      <PersonCard personInfo={personInfo} />
    </div>
  );
}

export default App;
