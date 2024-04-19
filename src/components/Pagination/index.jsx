import { useEffect, useState } from "react";
import * as SC from "./styles.js";

export const Pages = ({ numberOfPages, changeCurrentPage, currentPage }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const pagination = [];
    for (let i = 0; i < numberOfPages; i++) {
      pagination.push(i + 1);
    }
    setPages(pagination);
  }, [numberOfPages]);

  return (
    <SC.Pages>
      {pages.map((page) => (
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
