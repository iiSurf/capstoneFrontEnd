import React, { useState, useEffect } from "react";
import axios from "axios";

const VideosPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("/front/videos")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error getting videos", err);
      });
  }, []);

  return (
    <div>
      <h1>Breathing Skills</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p>{video.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideosPage;