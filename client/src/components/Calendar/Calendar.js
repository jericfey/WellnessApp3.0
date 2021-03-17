import React, { useState } from "react";
import Calendar from "react-calendar";
import { Segment } from "semantic-ui-react";
import { Card, Grid } from "semantic-ui-react";

function UserCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Segment floated="right" style={{ width: "50%" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default UserCalendar;
