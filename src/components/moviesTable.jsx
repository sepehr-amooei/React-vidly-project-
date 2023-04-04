import React, { Component } from 'react';
import Table from './common/table';
import Like from './common/like';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
    columns = [
      { path: 'title', lable: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
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
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
