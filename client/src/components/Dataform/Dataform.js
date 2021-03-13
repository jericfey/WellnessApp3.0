import React, { useState } from "react";
import axios from "axios";

const Dataform = () => {
  const [formObject, setFormObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    goalweight: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  //view the object form fields as they are entered
  console.log("First: ", formObject);

  const createNewUser = (event) => {
    event.preventDefault();
    //payload is the data to be sent to the server
    const payload = {
      firstname: formObject.firstname,
      lastname: formObject.lastname,
      email: formObject.email,
      password: formObject.password,
      goalweight: formObject.goalweight,
    };
    axios({
      url: "/api/users",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("createNewUser data has been sent to server");
        resetUserInputs();
      })
      .catch(() => {
        console.log("Error sending createNewUser data to server");
      });
  };

  const resetUserInputs = () => {
    setFormObject({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      goalweight: "",
    });
  };

  return (
    <div>
      <h1>Root</h1>
      <form onSubmit={createNewUser}>
        <div className="form-input">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formObject.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formObject.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="email"
            placeholder="email@email.com"
            value={formObject.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="password"
            placeholder="Create password"
            value={formObject.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="goalweight"
            placeholder="goalweight"
            value={formObject.goalweight}
            onChange={handleInputChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Dataform;
