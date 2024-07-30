// Imports
import React, { useState, useEffect } from "react";
import axios from "axios";

const VideosPage = () => {
  // State with the videos data
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos data from backend
    const fetchVideos = async () => {
      try {
        // Get request to fetch videos data
        const response = await axios.get("http://localhost:5000/front/videos");
        // Videos state with the fetched data
        setVideos(response.data);
      } catch (err) {
        // Error handling if something happens with fetching
        console.error("Error getting videos", err);
      }
    };

    // Calling the fetchVideos function
    fetchVideos();
  }, []); // Dependency array with nothing in it makes this run only once

  return (
    <div>
      <h1>Breathing Skills</h1>
      <ul>
        {videos.length > 0 ? (
          // Map through the videos array
          videos.map((video) => {
            return (
              <li key={video._id}>
                <iframe
                  width="560"
                  height="315"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  rel="noreferrer noopener"
                  allowFullScreen
                ></iframe>
                <p>{video.description}</p>
              </li>
            );
          })
        ) : (
          <p>Welcome</p>
        )}
      </ul>
    </div>
  );
};

export default VideosPage;
