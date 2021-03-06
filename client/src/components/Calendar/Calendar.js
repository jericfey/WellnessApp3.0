import React, { useState } from "react";
import Calendar from "react-calendar";
import { Segment, Card, Grid } from "semantic-ui-react";

function UserCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Segment style={{ width: "30%" }} className="cal">
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
