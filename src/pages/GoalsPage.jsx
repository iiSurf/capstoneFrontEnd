import React, { useState, useEffect } from "react";
import axios from "axios";

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    axios
      .get("/front/goals")
      .then((response) => {
        setGoals(response.data);
      })
      .catch((err) => {
        console.error("Error with fetching", err);
      });
  }, []);

  return (
    <>
      <h1>Your Goals Start Here</h1>
      <ul>
        {goals.map((item) => {
          <li key={item.id}>{item.description}</li>;
        })}
      </ul>
    </>
  );
};

export default GoalsPage;