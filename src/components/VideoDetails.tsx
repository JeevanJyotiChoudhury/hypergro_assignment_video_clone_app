import React from "react";
import { VideoType } from "../types/types";
import CreatorImage from "./CreatorImage";
import CreatorDetails from "./CreatorDetails";

interface Props {
  video: VideoType;
  handleLike: (postId: string) => void;
  handleComment: (postId: string, newComment: string) => void;
}

const VideoDetails: React.FC<Props> = ({
  video,
  handleLike,
  handleComment,
}) => {
  return (
    <div className="p-4">
      <div className="flex ">
        <CreatorImage video={video} />
        <CreatorDetails
          video={video}
          handleLike={handleLike}
          handleComment={handleComment}
        />
      </div>
    </div>
  );
};

export default VideoDetails;
