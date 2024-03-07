import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./components/VideoList";
import VideoPage from "./components/VideoPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<VideoList />} />
      <Route path="/video/:postId" element={<VideoPage />} />
    </Routes>
  );
};

export default App;
