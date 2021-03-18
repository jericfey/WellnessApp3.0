import React, { useState } from "react";
import axios from "axios";
import { Form, Header, Button, Icon } from "semantic-ui-react";

const Calorieform = () => {
  const [formObject, setFormObject] = useState({
    calorie: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  //view the object form fields as they are entered
  // console.log("Calorie: ", formObject);

  const addUserCalorie = async (event) => {
    event.preventDefault();

    const caloriePayload = {
      calorie: formObject.calorie,
    };

    axios({
      url: "/api/calorie",
      method: "POST",
      data: caloriePayload,
    })
      .then(() => {
        console.log("Current calorie added!");
        resetCalorieInput();
      })
      .catch(() => {
        console.log("Current Calorie not added!");
      });
  };

  const resetCalorieInput = () => {
    setFormObject({
      calorie: "",
    });
  };

  return (
    <Form>
      <Header icon textAlign="center">
        <Icon name="food" />
        Add Your Current Calorie Intake Today
      </Header>
      <Form.Field>
        <input
          name="calorie"
          type="text"
          placeholder="Current Calorie"
          value={formObject.calorie}
          onChange={handleInputChange}
        />
      </Form.Field>
      <Button
        color="green"
        content="Add Calorie"
        onClick={addUserCalorie}
       ></Button>
    </Form>
  );
};

export default Calorieform;
