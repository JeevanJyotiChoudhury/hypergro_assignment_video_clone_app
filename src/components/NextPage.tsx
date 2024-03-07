import React from "react";

interface Props {
  currentPage: number;
  handlePagination: (page: number) => void;
}

const NextPage: React.FC<Props> = ({ currentPage, handlePagination }) => {
  return (
    <button
      disabled={currentPage === 9}
      onClick={() => handlePagination(currentPage + 1)}
      className={`bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
        currentPage === 9 && "opacity-50 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  );
};

export default NextPage;
