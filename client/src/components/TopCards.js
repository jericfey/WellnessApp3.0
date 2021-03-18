import React from "react";
import { Card, Icon, Container, Grid, Header } from "semantic-ui-react";
import Caloriemodal from "./Currentcalorieform/Caloriemodal";
import WeightModal from "./Currentweightform/WeightModal";

function TopCards() {
  return (
    <Container>
      <Grid celled="internally" width={3}>
        <Grid.Row columns="equal">
          <Grid.Column style={{ backgroundColor: "deepskyblue" }}>
            <Icon name="weight" size="huge" inverted color="grey" />
            <Header>Current Weight</Header>
            {/* the current weight will actually be data pulled from the user */}
            <p>Weight(lbs)</p>
            <WeightModal />
          </Grid.Column>

          <Grid.Column style={{ backgroundColor: "limegreen" }}>
            <Icon name="trophy" size="huge" inverted color="grey" />
            <Header>Ideal Weight</Header>
            {/* the ideal weight will actually be data pulled from the user */}
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Grid.Column>

          <Grid.Column style={{ backgroundColor: "gold" }}>
            <Icon name="food" size="huge" inverted color="grey" />
            <Header>Calorie Intake</Header>
            {/* the calorie intake will actually be data pulled from the user */}
            <Card.Meta>Calories</Card.Meta>
            <Caloriemodal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default TopCards;
