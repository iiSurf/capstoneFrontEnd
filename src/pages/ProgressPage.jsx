import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgressPage = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios
      .get("/front/progress")
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
        {progress.map((item) => {
          <li key={item.id}>{item.description}</li>
})}
      </ul>
    </>
  );
};

export default ProgressPage;
