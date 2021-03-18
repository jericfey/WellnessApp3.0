import React from "react";
import { Segment } from "semantic-ui-react";

import {
  Card,
  Grid,
  Container,
  Input,
  Checkbox,
  Form,
} from "semantic-ui-react";

function ToDo() {
  return (
    <Container floated="center" style={{ width: "30%" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Card className="todo">
              <Card.Content>
                <Card.Header textAlign="left">
                  To Do List:
                  <Input placeholder="Add..." />
                </Card.Header>
              </Card.Content>
              <Card.Content textAlign="left">
                <Form style={{ padding: "0em" }}>
                  <Form.Field>
                    <Checkbox
                      //function for checkboxes needs to be created
                      // control={Checkbox}
                      label={<label>Go for a run</label>}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      // control={Checkbox}
                      label={<label>Eat more veggies</label>}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      // control={Checkbox}
                      label={<label>Walk 10,000 steps</label>}
                    />
                  </Form.Field>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
export default ToDo;
