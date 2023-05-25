import React from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  next,
  previous,
  currentPage,
}) => {
  const pageNumbers = [];
  var max = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= max; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {max > 2 && (
        <>
          {currentPage !== 1 && (
            <>
              <li
                className="page-item page-link"
                onClick={() => previous(currentPage)}
              >
                <i className="fa-solid fa-angle-left"></i>
              </li>
            </>
          )}
          {currentPage === 1 && (
            <>
              <li
                className="page-item page-link "
                key="01"
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>
              <li
                className="page-item page-link"
                key={currentPage + 1}
                onClick={() => paginate(currentPage + 1)}
              >
                {(currentPage + 1).toString()}
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={max}
                onClick={() => paginate(max)}
              >
                {max.toString()}
              </li>
            </>
          )}
          {currentPage === 2 && max > 3 && (
            <>
              <li
                className="page-item page-link"
                key="02"
                onClick={() => paginate(1)}
              >
                1
              </li>

              <li
                className="page-item page-link "
                key={currentPage}
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>
              <li
                className="page-item page-link"
                key={currentPage + 1}
                onClick={() => paginate(currentPage + 1)}
              >
                {(currentPage + 1).toString()}
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={max}
                onClick={() => paginate(max)}
              >
                {max.toString()}
              </li>
            </>
          )}
          {currentPage === 3 && max > 4 && (
            <>
              <li
                className="page-item page-link"
                key="03"
                onClick={() => paginate(1)}
              >
                1
              </li>

              <li
                className="page-item page-link"
                key={currentPage - 1}
                onClick={() => paginate(currentPage - 1)}
              >
                {(currentPage - 1).toString()}
              </li>
              <li
                className="page-item page-link "
                key={currentPage}
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>
              <li
                className="page-item page-link"
                key={currentPage + 1}
                onClick={() => paginate(currentPage + 1)}
              >
                {(currentPage + 1).toString()}
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={max}
                onClick={() => paginate(max)}
              >
                {max.toString()}
              </li>
            </>
          )}
          {currentPage > 3 && currentPage < max - 1 && (
            <>
              <li
                className="page-item page-link"
                key="0>3"
                onClick={() => paginate(1)}
              >
                1
              </li>
              <li className="page-item page-link">...</li>{" "}
              <li
                className="page-item page-link"
                key={currentPage - 1}
                onClick={() => paginate(currentPage - 1)}
              >
                {(currentPage - 1).toString()}
              </li>
              <li
                className="page-item page-link "
                key={currentPage}
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>
              <li
                className="page-item page-link"
                key={currentPage + 1}
                onClick={() => paginate(currentPage + 1)}
              >
                {currentPage + 1}
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={max}
                onClick={() => paginate(max)}
              >
                {max.toString()}
              </li>
            </>
          )}
          {currentPage === max - 1 && max > 2 && (
            <>
              <li
                className="page-item page-link"
                key="0>max-1"
                onClick={() => paginate(1)}
              >
                1
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={currentPage - 1}
                onClick={() => paginate(currentPage - 1)}
              >
                {(currentPage - 1).toString()}
              </li>
              <li
                className="page-item page-link "
                key={currentPage}
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>

              <li
                className="page-item page-link"
                key={max}
                onClick={() => paginate(max)}
              >
                {max.toString()}
              </li>
            </>
          )}
          {currentPage === max && max > 1 && (
            <>
              <li
                className="page-item page-link"
                key="max"
                onClick={() => paginate(1)}
              >
                1
              </li>
              <li className="page-item page-link">...</li>
              <li
                className="page-item page-link"
                key={currentPage - 1}
                onClick={() => paginate(currentPage - 1)}
              >
                {(currentPage - 1).toString()}
              </li>
              <li
                className="page-item page-link "
                key={currentPage}
                onClick={() => paginate(currentPage)}
              >
                {currentPage.toString()}
              </li>
            </>
          )}
          {currentPage !== max && (
            <>
              <li
                className="page-item page-link"
                onClick={() => next(currentPage)}
              >
                <i className="fa-solid fa-angle-right"></i>
              </li>
            </>
          )}
        </>
      )}
      {max === 2 && (
        <>
          <li
            className="page-item page-link"
            key="0122"
            onClick={() => paginate(max - 1)}
          >
            {(max - 1).toString()}
          </li>
          <li
            className="page-item page-link"
            key={max}
            onClick={() => paginate(max)}
          >
            {max.toString()}
          </li>
        </>
      )}
    </ul>
  );
};
