import React from "react";
import { VideoType } from "../types/types";
import Thumbnail from "./Thumbnail";
import VideoDetails from "./VideoDetails";

interface Props {
  video: VideoType;
  handleLike: (postId: string) => void;
  handleComment: (postId: string, newComment: string) => void;
}

const VideoCard: React.FC<Props> = ({ video, handleLike, handleComment }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Thumbnail video={video} />
      <VideoDetails
        video={video}
        handleLike={handleLike}
        handleComment={handleComment}
      />
    </div>
  );
};

export default VideoCard;
