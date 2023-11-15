const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const PORT = 8000; //(it can be any port it just by convention)

// make sure these lines are above any app.get or app.post code blocks
//MIDDLEWARE
app.use(express.json()); //parse
app.use(express.urlencoded({ extended: true })); //if the database sends you anything weird still parse the data

const createUser = () => {
  const userObj = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.datatype.uuid(),
  };

  return userObj;
};
// console.log(createUser());
const createCompany = () => {
  const companyObj = {
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return companyObj;
};
// console.log(createCompany());

const createBoth = () => {
  return {
    user: createUser(),
    company: createCompany(),
  };
};

console.log(createBoth());

//Route that creates a new user
app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

// Route to create the new company
app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

// Route that will return both user and company
app.get("/api/user/company", (req, res) => {
  res.json(createBoth());
});

//To start a server at the very bottom of the file
app.listen(PORT, () =>
  console.log(
    `>>> Server is up and running on PORT $(PORT) and is listening for REQuests to RESpond to`
  )
);
