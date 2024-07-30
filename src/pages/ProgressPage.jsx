// Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProgressPage = () => {
  // State with progress data
  const [progress, setProgress] = useState([]);

  // Fetch progress data
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Get request to fetch progress data
        const response = await axios.get(
          "http://localhost:5000/front/progress"
        );
        // Update the progress
        setProgress(response.data);
      } catch (err) {
        // Catch any errors
        console.error("Error with fetching", err);
      }
    };

    // Call fetchProgress
    fetchProgress();
  }, []); // Dependency array with nothing makes this run only once

  return (
    <>
      <h1>Your Progress Journey</h1>
      <ul>
        {progress.length > 0 ? (
          // Map through the progress array
          progress.map((item) => {
            return <li key={item._id}>{item.duration}</li>;
          })
        ) : (
          <p>Bienvenue</p>
        )}
      </ul>
    </>
  );
};

export default ProgressPage;
