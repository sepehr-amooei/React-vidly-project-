import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import paginate from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
  state = { 
    movies: [],
    genres:[],
    pageSize: 4,
    currentPage: 1,
    sortColumn: {path:'title', order:'asc'}
  }
  componentDidMount() {
    const genres = [{_id:"", name:'All Genres'}, ...getGenres()]
    this.setState({movies: getMovies(), genres})
  }
  
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({
    movies,
  })
  }
  
  handleLike = movie => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }
  
  handlePageChange = page => {
    const currentPage = page;
    this.setState({ currentPage });
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre,currentPage: 1 })
  }

  handleSort = sortColumn => { 
    this.setState({ sortColumn })
  }

  render() { 
    const { movies: allMovies, genres, currentPage, pageSize, selectedGenre, sortColumn } = this.state;
    const filterd = selectedGenre && selectedGenre._id ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;
    const sorted= _.orderBy(filterd,[sortColumn.path],[sortColumn.order])
    const movies = paginate(sorted, currentPage, pageSize);
    const { length: count } = filterd;
    if (count === 0) return <p>There are no movies in the databas</p>;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn = {sortColumn}
            order={sortColumn.order}
            onDelete={this.handleDelete} 
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            pageSize={pageSize}
            itemCount={count}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default Movies;