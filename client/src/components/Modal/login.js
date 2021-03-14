import React from "react";
import Signup from "./signup";
import {
  Button,
  Divider,
  Form,
  Grid,
  Modal,
  Header,
} from "semantic-ui-react";

function Dividerform() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Lets Get Started!</Button>}
    >
      <Grid
        columns={2}
        relaxed="very"
        stackable
        className="test"
        style={{ padding: "3em 3em" }}
      >
        <Grid.Column>
          <Form style={{ padding: "3em 5em" }}>
            <Header textAlign="center">Login</Header>
            <Form.Input
              icon="mail"
              iconPosition="left"
              label="Email"
              placeholder="Email"
              
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              label="Password"
              type="password"
            />

            <Button content="Login" primary />
          </Form>
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Signup />
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Modal>
  );
}
export default Dividerform;
