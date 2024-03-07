import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { VideoType } from "../types/types";

function VideoPage() {
  const { postId } = useParams<{ postId: string }>();
  const [videoData, setVideoData] = useState<VideoType | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://internship-service.onrender.com/videos"
        );
        const videos = response.data.data.posts;
        const video = videos.find(
          (video: VideoType) => video.postId === postId
        );
        setVideoData(video);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [postId]);

  if (!videoData) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#6b7280] text-white">
      <div className="max-w-2xl mx-auto pt-12">
        <video className="w-[100%] h-[30rem]" controls>
          <source
            src={videoData.submission.mediaUrl}
            type="video/mp4"
            className="w-[100%]"
          />
        </video>
        <div className="mt-8">
          <h1 className="text-lg font-regular">
            {videoData.submission.description}
          </h1>
          <p className="text-gray-200 mt-2 pb-6">
            Uploaded by {videoData.creator.name} @{videoData.creator.handle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
