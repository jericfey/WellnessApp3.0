import React, { useState } from "react";
import { Button, Divider, Grid, Segment, Modal } from "semantic-ui-react";
import Signup from "./signup";
import Login from "./login";

function UserForm() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Lets Get Started!</Button>}
    >
      <Segment placeholder className="cookie">
        <Grid columns={2} relaxed="very" stackable className="test">
          <Grid.Column>
            <Login />
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Signup />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Modal>
  );
}
export default UserForm;
