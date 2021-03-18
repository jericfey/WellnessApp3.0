import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "semantic-ui-react";

const Workoutform = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    duration: "",
    weight: "",
    reps: "",
    sets: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  //view the object form fields as they are entered
  console.log("Name: ", formObject);

  const createNewWorkout = (event) => {
    //event.preventDefault();
    //payload is the data to be sent to the server
    const payload = {
      name: formObject.name,
      duration: formObject.duration,
      weight: formObject.weight,
      reps: formObject.reps,
      sets: formObject.sets,
    };
    axios({
      url: "/api/workouts",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("createNewWorkout data has been sent to server");
        resetWorkoutInputs();
      })
      .catch(() => {
        console.log("Error sending createNewWorkout data to server");
      });
  };

  const resetWorkoutInputs = () => {
    setFormObject({
      name: "",
      duration: "",
      weight: "",
      reps: "",
      sets: "",
      distance: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={createNewWorkout}>
        <Form.Field>
          <input
            name='name'
            onChange={handleInputChange}
            value={formObject.name}
            type='text'
            placeholder='Exercise Type'
          />
        </Form.Field>
        <Form.Field>
          <input
            name='duration'
            onChange={handleInputChange}
            value={formObject.duration}
            type='text'
            placeholder='Duration in Minutes'
          />
        </Form.Field>
        <Form.Field>
          <input
            name='weight'
            onChange={handleInputChange}
            value={formObject.weight}
            type='text'
            placeholder='Weight in lbs'
          />
        </Form.Field>
        <Form.Field>
          <input
            name='sets'
            onChange={handleInputChange}
            value={formObject.sets}
            type='text'
            placeholder='Sets'
          />
        </Form.Field>
        <Form.Field>
          <input
            name='reps'
            onChange={handleInputChange}
            value={formObject.reps}
            type='text'
            placeholder='Reps'
          />
        </Form.Field>
        <Button type='submit' >
          Add Workout
        </Button>
      </Form>
      {/* <h1>Add a Workout</h1>
      <form onSubmit={createNewWorkout}>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Workout Name"
            value={formObject.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="duration"
            placeholder="Workout time in minutes"
            value={formObject.duration}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="weight"
            placeholder="Weight in lbs"
            value={formObject.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="reps"
            placeholder="How many reps?"
            value={formObject.reps}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="sets"
            placeholder="How many sets?"
            value={formObject.sets}
            onChange={handleInputChange}
          />
        </div>
        <button>Submit</button>
      </form> */}
    </Container>
  );
};

export default Workoutform;
