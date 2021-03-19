import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Form, Header } from "semantic-ui-react";

function Login(props) {
  const [formObject, setFormObject] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const [userFound, setUserFound] = useState("none");
  const [passwordChecked, setPasswordChecked] = useState(false);
  useEffect(() => {
    setFormObject({ email: props.userEmail, ...formObject });
  }, [props.userEmail]);

  useEffect(() => {
      if(userFound !== 'none'){
        checkEmail();
      }
    }, [userFound]);

    useEffect(() => {
      if(passwordChecked === true){
        loggedIn()
      }
    }, [passwordChecked]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // console.log("Second: ", formObject);

  const userLogin = async (event) => {
    event.preventDefault();

    const loginPayload = {
      email: formObject.email,
      password: formObject.password,
    };
    console.log("email1", formObject.email);
    axios({
      url: "/api/users/auth",
      method: "PUT",
      data: loginPayload
    })
      .then((user) => {
        //todo onsuccess redirect to dashboard. Dashboard specific to user.  If failed login alert email/password invalid
        console.log(user);
        setUserFound(user.data);
        if (user.data.loggedin) {
          history.push(`/dashboard/${user.id}`)
        }
      
      })
      .catch(() => {
        console.log("Login Denied");
      });
  };

  const checkEmail = () => {
    console.log("checking email", formObject, userFound);
    // if (formObject.password === userFound.password) {
    console.log("password is ok");
    axios({
      url: "/api/users/auth",
      method: "PUT",
      data: formObject,
    }).then((data) => {
      setPasswordChecked(true);
      console.log("got data:", data);
    });
  };

  const loggedIn = () => {
    const userObject = formObject
    userObject.loggedin = true
    console.log("email2", formObject.email);
    axios({
      url: `/api/users/${formObject.email}`,
      method: "PUT",
      data: userObject,
    }).then((data) => {
      console.log("got data:", data);
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
      <Header textAlign='center'>Login</Header>
      <Form.Input
        name='email'
        icon='mail'
        iconPosition='left'
        label='Email'
        placeholder='Email'
        type='text'
        onChange={handleInputChange}
      />
      <Form.Input
        name='password'
        icon='lock'
        iconPosition='left'
        label='Password'
        type='password'
        onChange={handleInputChange}
      />

      <Button onClick={userLogin} content='Login' primary />
    </Form>
  );
}

export default Login;
