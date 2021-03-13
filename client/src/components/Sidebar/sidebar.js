import React from "react";
import { MenuItem } from "semantic-ui-react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SidebarExampleVisible = () => (
  <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    vertical
    visible
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="fort awesome" />
      Dashboard
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="user circle" />
      Profile
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="bolt" />
      New Workout
    </Menu.Item>
    <MenuItem as="a" className="logoff">
      <Icon name="sign out" />
      <Link to="./pages/home">Logout</Link>
    </MenuItem>
  </Sidebar>
);

export default SidebarExampleVisible;
