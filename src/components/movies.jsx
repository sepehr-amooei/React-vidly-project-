import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import paginate from '../utils/paginate';

class Movies extends Component {
  state = { 
    movies: [],
    genres:[],
    pageSize: 4,
    currentPage: 1,
  }
  componentDidMount() {
    const genres = [{name:'All Genres'}, ...getGenres()]
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

  render() { 
    const { movies: allMovies, genres, currentPage, pageSize, selectedGenre } = this.state;
    const filterd = selectedGenre && selectedGenre._id ? allMovies.filter(movie => movie.genre._id === selectedGenre._id) : allMovies;
    const movies = paginate(filterd, currentPage, pageSize);
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
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {this.renderList(movies)}
            </tbody>
          </table>
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
  renderList(movieList) {
    return movieList.map(movie => {
    return (
      <tr key={movie._id}>
      <td>{ movie.title }</td>
      <td>{ movie.genre.name}</td>
      <td>{ movie.numberInStock }</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
          <Like liked={movie.liked} onClick={ () => this.handleLike(movie) } />
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={()=> this.handleDelete(movie)} >Delete</button>
      </td>
    </tr>)
  })
}
}

export default Movies;