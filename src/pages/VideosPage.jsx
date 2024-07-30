// imports
import React, { useState, useEffect } from "react";
import axios from "axios";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/front/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => {
        console.error("Error getting videos", err);
      });
  }, []);

  return (
    <div>
      <h1>Breathing Skills</h1>
      <ul>
        {videos.length > 0 ? (
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
