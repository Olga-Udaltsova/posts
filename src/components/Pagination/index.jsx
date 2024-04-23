import { useEffect, useState } from "react";
import * as SC from "./styles.js";
import { useSelector } from "react-redux";

export const Pages = ({ changeCurrentPage, currentPage }) => {
  const { quantity } = useSelector((state) => state.posts.pages);
  const [numberOfPages, setNumberOfPages] = useState([]);

  useEffect(() => {
    const pagination = [];
    for (let i = 0; i < quantity; i++) {
      pagination.push(i + 1);
    }
    setNumberOfPages(pagination);
  }, [quantity]);

  return (
    <SC.Pages>
      {numberOfPages.map((page) => (
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
