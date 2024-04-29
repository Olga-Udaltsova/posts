import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as SC from "./styles.js";

export const Pages = ({ changeCurrentPage, currentPage }) => {
  const { numberOfPages } = useSelector((state) => state.posts.pages);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < numberOfPages; i++) {
      temp.push(i + 1);
    }
    setPagination(temp);
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
