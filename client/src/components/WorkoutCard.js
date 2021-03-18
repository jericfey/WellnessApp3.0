import React, { useEffect, useState } from "react";
import { Card, Container } from "semantic-ui-react";
import API from "../utils/API";

function WorkoutCard() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts();
  }, [setWorkouts]);

  function getWorkouts() {
    API.getWorkouts()
      .then((response) => {
        setWorkouts(response.data);
        console.log(response.data);
        console.log("Workouts received from DB!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      {workouts.length > 0 ? (
        <div>
          {workouts.map((workout, index) => {
              return (
            <Card key={index}>
              <Card.Content>
                <Card.Header>Exercise: {workout.name}</Card.Header>
                <Card.Description>Time: {workout.duration} min</Card.Description>
                <Card.Description>Weight: {workout.weight} lbs</Card.Description>
                <Card.Description>Sets: {workout.sets}</Card.Description>
                <Card.Description>Reps: {workout.reps}</Card.Description>
                <Card.Description>Date: {workout.date}</Card.Description>
              </Card.Content>
            </Card>
              );
          })}
        </div>
      ) : (
        <h3>
          No Workouts to display. Put down the bag of Doritos and Mtn. Dew and
          go the gym!
        </h3>
      )}
    </Container>
  );
}

export default WorkoutCard;
