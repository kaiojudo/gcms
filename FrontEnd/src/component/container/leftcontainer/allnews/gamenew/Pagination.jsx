import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  var max = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= max; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className="page-item page-link"
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
