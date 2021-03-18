import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DropdownMenu = () => (
  <Dropdown
    icon="content white"
    fluid
    selection
    style={{ backgroundColor: "grey" }}
  >
    <Dropdown.Menu>
      <Dropdown.Item
        text="Dashboard"
        icon="fort awesome"
        as={Link}
        to="/dashboard/:id"
      />
      <Dropdown.Item text="Workouts" icon="bolt" as={Link} to="/workouts" />
      <Dropdown.Item text="Contact Us" icon="team" as={Link} to="/team" />
      <Dropdown.Item text="Logout" icon="logoff" as={Link} to="/" />
    </Dropdown.Menu>
  </Dropdown>
);
export default DropdownMenu;
