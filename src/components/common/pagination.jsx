import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const page = _.range(1, pageCount + 1);
  return (
    <nav aria-label="...">
      <ul className="pagination">
        {page.map((p) => (
          <li
            key={p}
            className={currentPage === p ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(p)} className="page-link">
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
