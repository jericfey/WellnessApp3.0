import React from "react";
import TopCards from "../components/TopCards";

import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import UserCalendar from "../components/Calendar/Calendar";
import Articlelist from "../components/Articles/Articlelist";

function Dashboard() {
  return (
    <div>
      <TopCards />
      <ToDo />
      <Sidebar />
      <UserCalendar />
      <Articlelist />
    </div>
  );
}

export default Dashboard;
