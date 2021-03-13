import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    API.getUsers()
      .then((response) => {
        setUsers(response.data);
        console.log("Data has been received from the DB.");
      })
      .catch((err) => console.log(err));
  }


  return (
    <div>
      {users.length > 0 ? (
        <div>
          {users.map((user) => {
            return (
              <div key={user.index}>
                <h3>{user.firstname}</h3>
                <h3>{user.lastname}</h3>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
};

export default Data;
