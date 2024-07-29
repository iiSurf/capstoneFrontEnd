import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GoalsPage from "./pages/GoalsPage";
import VideosPage from "./pages/VideosPage";
import ProgressPage from "./pages/ProgressPage";
import NavBar from "./components/NavBar";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/goals" element={<GoalsPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </>
  );
};

export default App;
