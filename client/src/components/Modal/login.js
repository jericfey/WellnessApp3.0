import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";

function Login() {
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const userLogin = async (event) => {
    event.preventDefault();

    const loginPayload = {
      email: formObject.email,
      password: formObject.password,
    };

    axios({
      url: "/api/users",
      method: "POST",
      data: loginPayload,
    })
      .then(() => {
        //todo onsuccess redirect to dashboard
        useHistory.push(".dashboard");
        console.log("Login Successful");
        resetLoginUserInputs();
      })
      .catch(() => {
        console.log("Login Denied");
      });
  };

  const resetLoginUserInputs = () => {
    setFormObject({
      email: "",
      password: "",
    });
  };


  return (
    <Form style={{ padding: "3em 5em" }}>
      <Header textAlign="center">Login</Header>
      <Form.Input
        name="email"
        icon="mail"
        iconPosition="left"
        label="Email"
        placeholder="Email"
        type="text"
        onChange={handleInputChange}
      />
      <Form.Input
        name="password"
        icon="lock"
        iconPosition="left"
        label="Password"
        type="password"
        onChange={handleInputChange}
      />

      <Button onClick={userLogin} content="Login" primary />
    </Form>
  );
}

export default Login;
