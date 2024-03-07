import React from "react";
import { Link } from "react-router-dom";
import { VideoType } from "../types/types";

interface Props {
  video: VideoType;
}

const Thumbnail: React.FC<Props> = ({ video }) => {
  return (
    <div>
      <Link key={video.postId} to={`/video/${video.postId}`}>
        <img
          src={video.submission.thumbnail}
          alt=""
          className="w-full h-[30rem]"
        />
      </Link>
    </div>
  );
};

export default Thumbnail;
