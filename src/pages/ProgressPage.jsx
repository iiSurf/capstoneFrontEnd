import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgressPage = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/front/progress")
      .then((response) => {
        setProgress(response.data);
      })
      .catch((err) => {
        console.error("Error with fetching", err);
      });
  }, []);

  return (
    <>
      <h1>Your Progress Journey</h1>
      <ul>
        {progress.length > 0 ? progress.map((item) => {
        return  <li key={item._id}>{item.duration}</li>
}) : <p>Bienvenue</p> }
      </ul>
    </>
  );
};
export default ProgressPage;
