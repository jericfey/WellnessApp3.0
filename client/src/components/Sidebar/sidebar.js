import React from "react";
import { Icon, Menu, Sidebar, MenuItem } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserSidebar = () => (
  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    inverted
    vertical
    visible
    width='thin'
  >
    <Link to='/dashboard/:id'>
      <Menu.Item as='a'>
        <Icon name='fort awesome' />
        Dashboard
      </Menu.Item>
    </Link>
    <Link to='/user'>
      <Menu.Item as='a'>
        <Icon name='user circle' />
        Profile
      </Menu.Item>
    </Link>
    <Link to='/workoutform'>
      <Menu.Item>
        <Icon name='bolt' />
        Workouts
      </Menu.Item>
    </Link>
    <Link to='/team'>
      <Menu.Item className='team'>
        <Icon name='group' />
        Contact Us
      </Menu.Item>
    </Link>
    <Link to='/'>
      <MenuItem as='a' className='logoff'>
        <Icon name='sign out' />
        Logout
      </MenuItem>
    </Link>
  </Sidebar>
);

export default UserSidebar;
