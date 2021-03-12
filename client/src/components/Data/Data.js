import React, { useState, useEffect } from "react";
import "./Data.css";
import axios from "axios";

const Data = () => {
  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const getUsers = async () => {
    const res = await axios.get("/api");
    console.log(res.data.users);
    setUsers(res.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const allUsers = () => {
    users.length > 0 &&
      users.map((user, index) => {
        return (
          <li key={index}>
            First: {user.firstname} | Last: {user.lastname} | Email:{" "}
            {user.email}
          </li>
        );
      });
  };
  const message = users.length > 0 ? "All Users" : "No Users Found";

  return (
    <div className="container">
      <h1 className="title">{message}</h1>
      <ul className="users">{allUsers}</ul>
    </div>
  );
};

export default Data;
