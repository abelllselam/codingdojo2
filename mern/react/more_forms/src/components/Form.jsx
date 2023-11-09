import React from "react";

const Form = (props) => {
  const { value, setValue } = props;

  const change = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="fName">First Name: </label>
          <input type="text" name="fName" onChange={change} />
          <p>
            {value.fName.length < 2 && value.fName.length > 0
              ? "First Name field must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="lName">Last Name: </label>
          <input type="text" name="lName" onChange={change} />
          <p>
            {value.lName.length < 2 && value.lName.length > 0
              ? "Last Name field must be at least 2 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" onChange={change} />
          <p>
            {value.email.length < 5 && value.email.length > 0
              ? "The Email field must be at least 5 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" onChange={change} />
          <p>
            {value.password.length < 8 && value.password.length > 0
              ? "The Password field must be at least 8 characters."
              : ""}
          </p>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" name="confirmPassword" onChange={change} />
          <p>
            {value.password !== value.confirmPassword &&
            value.confirmPassword > 0
              ? "The Confirm Password field must be at least 8 characters and match the password field."
              : ""}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
