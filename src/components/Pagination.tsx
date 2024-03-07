import React from "react";
import PreviousPage from "./PreviousPage";
import NextPage from "./NextPage";

interface Props {
  currentPage: number;
  handlePagination: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, handlePagination }) => {
  return (
    <div className="flex justify-center mt-8">
      <PreviousPage
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
      <NextPage currentPage={currentPage} handlePagination={handlePagination} />
    </div>
  );
};

export default Pagination;
