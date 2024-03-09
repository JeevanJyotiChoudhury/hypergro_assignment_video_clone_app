import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import Pagination from "./Pagination";
import { VideoType } from "../types/types";
import Loading from "./Loading";

function VideoList() {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, [currentPage]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${currentPage}`
      );
      const { posts } = response.data.data;
      const updatedPosts = posts.map((video: VideoType) => {
        const initialLikes =
          localStorage.getItem(`likes_${video.postId}`) ||
          video.reaction.count.toString();
        const initialComments =
          localStorage.getItem(`comments_${video.postId}`) ||
          video.comment.count.toString();
        const initialCommentsArray = JSON.parse(
          localStorage.getItem(`commentsArray_${video.postId}`) || "[]"
        );
        return {
          ...video,
          likes: parseInt(initialLikes, 10),
          comment: {
            ...video.comment,
            count: parseInt(initialComments, 10),
            comments: initialCommentsArray,
          },
        };
      });
      setVideos(updatedPosts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false);
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const handleLike = (postId: string) => {
    const updatedVideos = videos.map((video) => {
      if (video.postId === postId) {
        const localStorageKey = `likes_${postId}`;
        let updatedLikes;

        const currentLikes = video.likes;
        const likedStatus = localStorage.getItem(`likedStatus_${postId}`);

        if (likedStatus === "true") {
          updatedLikes = currentLikes - 1;
          localStorage.setItem(`likedStatus_${postId}`, "false");
        } else {
          updatedLikes = currentLikes + 1;
          localStorage.setItem(`likedStatus_${postId}`, "true");
        }

        localStorage.setItem(localStorageKey, updatedLikes.toString());
        return { ...video, likes: updatedLikes };
      }
      return video;
    });

    setVideos(updatedVideos);
  };

  const handleComment = (postId: string, newComment: string) => {
    const updatedVideos = videos.map((video) => {
      if (video.postId === postId) {
        const localStorageKey = `comments_${postId}`;
        const updatedComments = video.comment.count + 1;
        localStorage.setItem(localStorageKey, updatedComments.toString());
        const updatedCommentsList = [
          ...(video.comment.comments || []),
          newComment,
        ];
        localStorage.setItem(
          `commentsArray_${postId}`,
          JSON.stringify(updatedCommentsList)
        );
        return {
          ...video,
          comment: {
            ...video.comment,
            count: updatedComments,
            comments: updatedCommentsList,
          },
        };
      }
      return video;
    });
    setVideos(updatedVideos);
  };

  return (
    <div className="w-full bg-gray-500 text-white">
      <div className="container mx-auto py-8 w-[95%]">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.postId}
                video={video}
                handleLike={handleLike}
                handleComment={handleComment}
              />
            ))}
          </div>
        )}
        <Pagination
          handlePagination={handlePagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default VideoList;
