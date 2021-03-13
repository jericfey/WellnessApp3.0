import React from "react";
import TopCards from "../components/TopCards";

import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import UserCalendar from "../components/Calendar/Calendar";


function Dashboard() {
  return (
    <div>
      <TopCards />
      <ToDo />
      <Sidebar />
      <UserCalendar />
    </div>
  );
}

export default Dashboard;
