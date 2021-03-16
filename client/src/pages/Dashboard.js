import React from "react";
import TopCards from "../components/TopCards";

import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import UserCalendar from "../components/Calendar/Calendar";
import Articles from "../components/Articles/Articles";

function Dashboard() {
  return (
    <div>
      <TopCards />
      <ToDo />
      <Sidebar />
      <UserCalendar />
      <Articles />
    </div>
  );
}

export default Dashboard;
