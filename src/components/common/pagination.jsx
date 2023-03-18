import React from 'react';
import _ from 'lodash';

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
 const pageCount = Math.ceil(itemCount / pageSize);
 if (pageCount === 1) return null;
 const page = _.range(1, pageCount + 1);
 return ( 
  <nav aria-label="...">
   <ul class="pagination">
    {page.map( p => <li class={currentPage === p ? "page-item active" : "page-item" } onClick= {() => onPageChange(p)}><button class="page-link" href="#">{p}</button></li>)}
  </ul>
</nav>
  );
}
 
export default Pagination;