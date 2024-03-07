import React, { useState } from "react";
import { VideoType } from "../types/types";

interface Props {
  video: VideoType;
  handleComment: (postId: string, newComment: string) => void;
}

const Comment: React.FC<Props> = ({ video, handleComment }) => {
  const [newComment, setNewComment] = useState<string>("");
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      handleComment(video.postId, newComment);
      setNewComment("");
      setShowInput(false);
    }
  };

  return (
    <div>
      <div className="flex items-center text-gray-400 justify-between w-[70%]  py-2">
        <div className="font-bold">{video.comment.count} 💬</div>
        <div>
          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="px-4 py-1 bg-blue-700 text-white rounded-md hover:bg-blue-400 transition duration-200"
            >
              Add 💬
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="mt-2 px-4 py-1 bg-blue-700 text-white rounded-md hover:bg-blue-400 transition duration-200"
            >
              Post 💬
            </button>
          )}
        </div>
      </div>
      <div>
        {showInput && (
          <div className="mt-2">
            <textarea
              rows={1}
              cols={50}
              value={newComment}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              placeholder="Add a comment..."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
