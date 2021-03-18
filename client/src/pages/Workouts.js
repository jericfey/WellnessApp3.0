import React from "react";
import {Container} from "semantic-ui-react"
import WorkoutCard from "../components/WorkoutCard"
import Workoutform from "../components/Workoutform/Workoutform"

const Workouts = () => {

  return (
    <Container>
      <Workoutform />
      <WorkoutCard />
    </Container>
  );
};

export default Workouts;
