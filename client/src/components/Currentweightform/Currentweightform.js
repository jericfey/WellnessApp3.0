import React, { useState } from "react";
import axios from "axios";
import { Form, Header, Button, Icon } from "semantic-ui-react";

const Weightform = () => {
  const [formObject, setFormObject] = useState({
    weight: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  //view the object form fields as they are entered
  // console.log("Weight: ", formObject);

  const addUserWeight = async (event) => {
    event.preventDefault();

    const weightPayload = {
      weight: formObject.weight,
    };

    axios({
      url: "/api/weight",
      method: "POST",
      data: weightPayload,
    })
      .then(() => {
        console.log("Current weight added!");
        resetWeightInput();
      })
      .catch(() => {
        console.log("Current Weight not added!");
      });
  };

  const resetWeightInput = () => {
    setFormObject({
      weight: "",
    });
  };

  return (
    <Form>
      <Header icon textAlign="center">
        <Icon name="weight" />
        Add Your Current Weight
      </Header>
      <Form.Field>
        <input
          name="weight"
          type="text"
          placeholder="Current Weight"
          value={formObject.weight}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Button
        color="green"
        content="Add Weight"
        onClick={addUserWeight}
       ></Button>
    </Form>
  );
};

export default Weightform;
