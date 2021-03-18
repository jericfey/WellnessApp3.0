import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import TopCards from "../components/TopCards";
import Sidebar from "../components/Sidebar/sidebar";
import ToDo from "../components/ToDo/todo";
import UserCalendar from "../components/Calendar/Calendar";
import Articlelist from "../components/Articles/Articlelist";
import axios from "axios";
import Weight from "../components/Weight/graph2";

async function getUser(id) {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
}

const useAsync = (asyncFunction, immediate = true) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setLoading(true);
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((data) => {
        setValue(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, loading, value, error };
};

function Dashboard(props) {
  const { id } = useParams();
  const { value, loading, error, execute } = useAsync(() => getUser(id), false);
  useEffect(() => {
    execute();
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error" + error;
  console.log(value);

  return (
    <div>
      <Sidebar />
      <TopCards />
      <Articlelist />
      <UserCalendar />
      <ToDo />
      <Weight />
    </div>
  );
}

export default Dashboard;
