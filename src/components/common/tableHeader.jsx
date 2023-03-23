import React, { Component } from 'react';

// column:array
// sortColumn:object
// onSort:function

class TableHeader extends Component {
raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn)
 }
 
 renderSortIcon = column => {
  const { sortColumn } = this.props;
  if(column.path){
   if ( column.path=== sortColumn.path)
    return sortColumn.order === 'asc' ? <i className="fa fa-sort-asc" aria-hidden="true"></i> : <i className="fa fa-sort-desc" aria-hidden="true"></i>;
   else
    return <i className="fa fa-sort" aria-hidden="true"></i>;
  }
 }
 render() { 
  return (
   <thead>
    <tr>
     {this.props.columns.map(column => <th className='clickable' key={column.path || column.key} onClick={() => this.raiseSort(column.path)} scope="col">{column.lable}{ this.renderSortIcon(column) }</th>)}
    </tr>
   </thead>
  );
 }
}
 
export default TableHeader;