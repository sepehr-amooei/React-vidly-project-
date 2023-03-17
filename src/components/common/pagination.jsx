// import React from 'react';

// import _ from 'lodash';
// import propTypes from 'prop-types';

// const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
//  // const paginationCount = Math.round(itemsCount / pageSize) + 1;
//  // let paginationArray = [];
//  // for (let i = 1; i <= paginationCount; i++) {
//  //  paginationArray.push(i);
//  // }
//  const pageCount = Math.ceil(itemsCount / pageSize);
//  if (pageCount === 1) return null;
//  const pages = _.range(1 , pageCount + 1)
//  return (
//   <nav aria-label="Page navigation example">
//    <ul className="pagination">
//         {pages.map(page => <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}><button onClick={() => onPageChange(page)} className="page-link">{page}</button></li>)}
        
//   </ul>
// </nav>
//   );
// }
// Pagination.propTypes = {
//   itemsCount: propTypes.number.isRequired,
//   pageSize: propTypes.number.isRequired,
//   onPageChange: propTypes.func.isRequired,
//   currentPage:propTypes.number.isRequired
// }

// export default Pagination;
