import React from "react";
import TopCards from "../components/TopCards";

import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import UserCalendar from "../components/Calendar/Calendar";
import Articlelist from "../components/Articles/Articlelist";
import { Grid } from "semantic-ui-react";
import Weight from "../components/Weight/graph2";
function Dashboard() {
  return (
    <div>
      <TopCards />
      <Grid>
        <Grid.Row columns={2}>
          <ToDo />
          <UserCalendar />
        </Grid.Row>
      </Grid>

      <Sidebar />

      <Articlelist />
      <Weight />
    </div>
  );
}

export default Dashboard;
