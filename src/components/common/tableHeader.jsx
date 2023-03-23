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
 render() { 
  return (
   <thead>
    <tr>
     {this.props.columns.map(column => <th key={column.path || column.key} scope="col">{ column.lable }<i style={{cursor : 'pointer'}} onClick ={() => this.raiseSort(column.path)} className={column.path ? "fa fa-sort m-2":null} aria-hidden="true"></i></th>)}
    </tr>
   </thead>
  );
 }
}
 
export default TableHeader;