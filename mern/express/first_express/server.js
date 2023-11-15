const express = require("express");
const app = express();
const PORT = 8000; //(it can be any port it just by convention)

// make sure these lines are above any app.get or app.post code blocks
//MIDDLEWARE
app.use(express.json()); //parse
app.use(express.urlencoded({ extended: true })); //if the database sends you anything weird still parse the data

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" },
];

//Routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

//Routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

// Routes
app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body); // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body); // we always need to respond with something
  res.json({ status: "ok" });
});

//To start a server at the very bottom of the file
app.listen(PORT, () =>
  console.log(
    `>>> Server is up and running on PORT $(PORT) and is listening for REQuests to RESpond to`
  )
);
