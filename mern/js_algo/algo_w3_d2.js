/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";

const insertData1 = { first_name: "John", last_name: "Doe" };

const expectedA =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};

const expectedB =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";

// R.I.O.T.
// DRIVER 🚗
// PRESENTER 🧑‍🏫
// NAVIGATOR 🧭
function insert(tableName, columnValuePairs) {
  // remember to write the pseudocode first!
  // Initialize arrays to store column names and values
  const columns = [];
  const val = [];

  // Iterate through the keys in columnValuePairs
  for (const key in columnValuePairs) {
    if (columnValuePairs.hasOwnProperty(key)) {
      // Push column name into the columns array
      // console.log(key);
      columns.push(key);

      // Push the corresponding value into the val array
      // console.log(columnValuePairs[key]);
      const value = columnValuePairs[key];
      // val.push(`'${value}'`);
      val.push(typeof value === "string" ? `'${value}'` : val);
    }
  }

  const output = `INSERT INTO ${tableName} (${columns}) VALUES (${val});`;

  return output;
}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));
