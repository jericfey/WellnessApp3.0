import React, { useState } from "react";

import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";
import { PromiseProvider } from "mongoose";

function Signup(props) {
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
    props.setUserEmail(value)
  }

  console.log("First: ", formObject);

  const createNewUser = async (event) => {
    event.preventDefault();

    const newUserPayload = {
      firstname: formObject.firstname,
      lastname: formObject.lastname,
      email: formObject.email,
      password: formObject.password,
      goalweight: formObject.goalweight,
    };

    axios({
      url: "/api/users",
      method: "POST",
      data: newUserPayload,
    })
      .then(() => {
        // TODO return a status depending on that status if email already exists return alert, else alert with success and let direct them to login
        
        console.log("createNewUser data has been sent to server");
        resetCreateUserInputs();
      })
      .catch(() => {
        console.log("Error sending createNewUser data to server");
      });
  };

  const resetCreateUserInputs = () => {
    setFormObject({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      goalweight: "",
    });
  };

  return (
    <Form>
      <Header textAlign='center'>Signup</Header>
      <Form.Field>
        <label>First name:</label>
        <input
          name='firstname'
          type='text'
          placeholder='Bob'
          value={formObject.firstname}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Last name:</label>
        <input
          name='lastname'
          type='text'
          placeholder='The Builder'
          value={formObject.lastname}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input
          name='email'
          type='text'
          placeholder='Bob@bob.com'
          value={formObject.email}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password:</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={formObject.password}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Goal Weight:</label>
        <input
          name='goalweight'
          type='text'
          placeholder='Weight'
          value={formObject.goalweight}
          onChange={handleInputChange}
        />
      </Form.Field>

      <Button onClick={createNewUser} content='Signup' primary />
    </Form>
  );
}

export default Signup;
