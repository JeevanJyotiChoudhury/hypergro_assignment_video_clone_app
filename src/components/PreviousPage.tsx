import React from "react";

interface Props {
  currentPage: number;
  handlePagination: (page: number) => void;
}

const PreviousPage: React.FC<Props> = ({ currentPage, handlePagination }) => {
  return (
    <button
      disabled={currentPage === 0}
      onClick={() => handlePagination(currentPage - 1)}
      className={`mr-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${
        currentPage === 0 && "opacity-50 cursor-not-allowed"
      }`}
    >
      Previous
    </button>
  );
};

export default PreviousPage;
