import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import Like from './common/like';

class MoviesTable extends Component {
    columns = [
      { path: 'title', lable: 'Title' },
      { path: 'genre.name', lable: 'Genre' },
      { path: 'numberInStock', lable: 'Stock' },
      { path: 'dailyRentalRate', lable: 'Rate' },
      {
        key: 'like',
        content:movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      },
      {
        key: 'delete',
        content: movie => <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie)} >Delete</button>
      },
      
    ]
  render() { 

    const { movies, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={movies}
          columns={this.columns}
        />
  </table>
    );
  }
}

export default MoviesTable;
