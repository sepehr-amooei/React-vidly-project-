import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import Like from './common/like';

class MoviesTable extends Component {
    columns = [
      { path: 'title', lable: 'Title' },
      { path: 'genre.name', lable: 'Genre' },
      { path: 'numberInStock', lable: 'Stock' },
      { path: 'dailyRentalRate', lable: 'Rate' },
      { key: 'like' },
      { key: 'delete' },
      
    ]
  render() { 

    const { movies, sortColumn, onDelete, onLike, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          column={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
    <tbody>
    {movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        </td>
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie)} >Delete</button>
        </td>
      </tr>))}
    </tbody>
  </table>
    );
  }
}

export default MoviesTable;
