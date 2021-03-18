import React from "react";
import { Card, Icon, Container, Header } from "semantic-ui-react";
import Caloriemodal from "./Currentcalorieform/Caloriemodal";
import WeightModal from "./Currentweightform/WeightModal";

function TopCards(props) {
  return (
    <Container>
      <Card.Group className="topcards">
        <Card style={{ backgroundColor: "deepskyblue" }}>
          <Card.Content>
            <Icon name="weight" size="huge" inverted color="grey" />
            <Header>Current Weight</Header>
            {/* the current weight will actually be data pulled from the user */}
            <p>Weight(lbs)</p>
            <WeightModal />
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "limegreen" }}>
          <Card.Content>
            <Icon name="trophy" size="huge" inverted color="grey" />
            <Header>Goal Weight{props.goalweight}</Header>
            {/* the ideal weight will actually be data pulled from the user */}
            <Card.Meta>Weight(lbs)</Card.Meta>
          </Card.Content>
        </Card>
        <Card style={{ backgroundColor: "gold" }}>
          <Card.Content>
            <Icon name="food" size="huge" inverted color="grey" />
            <Header>Calorie Intake</Header>
            {/* the calorie intake will actually be data pulled from the user */}
            <Card.Meta>Calories</Card.Meta>
            <Caloriemodal />
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default TopCards;
