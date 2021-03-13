import React, { useState } from "react";
import Calendar from "react-calendar";
import { Container, Card, Grid } from "semantic-ui-react";

function UserCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Grid divided="vertically" floated="center" textAlign="center">
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header textAlign="left">Calendar</Card.Header>
              </Card.Content>
              <Card.Content textAlign="left">
                <Calendar
                  onChange={onChange}
                  value={value}
                  calendarType="ISO 8601"
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default UserCalendar;
