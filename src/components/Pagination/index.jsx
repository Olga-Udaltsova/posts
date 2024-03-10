import * as SC from "./styles.js";

const PAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Pages = ({ changeCurrentPage, currentPage }) => (
  <SC.Pages>
    {PAGES.map((page) => (
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
