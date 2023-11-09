import React from "react";

const PersonCard = (props) => {
  const { personInfo } = props;
  <hr />;
  //   {
  //     JSON.stringify(personInfo);
  //   }
  //   console.log(personInfo);

  return (
    <div>
      {props.personInfo.map((onePerson, i) => {
        return (
          <div key={i}>
            <p>
              {onePerson.lastName}, {onePerson.firstName}{" "}
            </p>
            <p>Age: {onePerson.age}</p>
            <p>Hair Color: {onePerson.hairColor}</p>
            <p>-------------------------------------</p>
          </div>
        );
      })}
    </div>
  );
};

export default PersonCard;
