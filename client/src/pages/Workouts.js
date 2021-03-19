import React from "react";
import { Container, Grid, Divider } from "semantic-ui-react";
import WorkoutCard from "../components/WorkoutCard";
import Workoutform from "../components/Workoutform/Workoutform";
import Sidebar from "../components/Sidebar/sidebar";



const Workouts = () => {
  return (
    <Container>
      <Sidebar />
      <Grid rows={2}>
        <Grid.Row>
          <Workoutform />
        </Grid.Row>

        <Divider horizontal>Workouts Below</Divider>
        <Grid.Row>
          <WorkoutCard />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Workouts;
