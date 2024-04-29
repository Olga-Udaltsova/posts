import { useEffect, useState } from "react";
import * as SC from "./styles.js";
import { useSelector } from "react-redux";

export const Pages = ({ changeCurrentPage, currentPage }) => {
  const { numberOfPages } = useSelector((state) => state.posts.pages);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const pagination = [];
    for (let i = 0; i < numberOfPages; i++) {
      pagination.push(i + 1);
    }
    setPagination(pagination);
  }, [numberOfPages]);

  return (
    <SC.Pages>
      {pagination.map((page) => (
        <SC.Button
          key={page}
          onClick={() => changeCurrentPage(page)}
          className={currentPage === page ? "active" : "noActive"}
        >
          {page}
        </SC.Button>
      ))}
    </SC.Pages>
  );
};
