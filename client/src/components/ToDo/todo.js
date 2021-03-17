import React from "react";

import { Card, Grid, Input, Checkbox, Form } from "semantic-ui-react";

const CardExampleContentBlock = () => (
  <div>
    <Grid textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header textAlign="left" className="todo">
                To Do List:
                <Input placeholder="Add..." />
              </Card.Header>
            </Card.Content>
            <Card.Content textAlign="left">
              <Form>
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
  </div>
);

export default CardExampleContentBlock;
