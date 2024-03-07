import React from "react";
import { VideoType } from "../types/types";

interface Props {
  video: VideoType;
  handleLike: (postId: string) => void;
}

const Like: React.FC<Props> = ({ video, handleLike }) => {
  return (
    <div className="flex items-center text-gray-400 gap-8">
      <button
        onClick={() => handleLike(video.postId)}
        className="text-red-400 font-bold mr-1"
      >
        Like
      </button>
      <span>👍{video.likes}</span>
    </div>
  );
};

export default Like;
