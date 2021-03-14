import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Data = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts();
  }, []);

  function getWorkouts() {
    API.getWorkouts()
      .then((response) => {
        setWorkouts(response.data);
        console.log("Data has been received from the DB.");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {workouts.length > 0 ? (
        <div>
          {workouts.map((workout) => {
            return (
              <div key={workout.index}>
                <h3>{workout.name}</h3>
                <p>Duration: {workout.duration}</p> |
                <p>Weight: {workout.weight}</p>
                <p>Reps: {workout.reps}</p> | <p>Sets: {workout.sets}</p>
                <br />
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
