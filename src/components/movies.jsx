// import React, { Component } from 'react';

// import { getMovies } from '../services/fakeMovieService';
// import Like from './common/like';
// import Pagination from './common/pagination';
// import paginated from '../utils/paginate';
// import { getGenres } from '../services/fakeGenreService';
// import ListGroup from './common/listGroup';


// class Movies extends Component {
//   state = {
//     movies: [],
//     currentPage : 1,
//     genres: [],
//     pageSize: 4,
//   }
//   componentDidMount() {
//   const genres = [{ name: 'all Generes' }, ...getGenres()];
//   this.setState({movies: getMovies() , genres})
// }

//   handleDelete = item => {
//   const movies = this.state.movies.filter(m => m._id !== item._id);
//   this.setState({
//     movies,
//   })
//   }
//   handleLike = item => {
//     const movies = [...this.state.movies];
//     const index = movies.indexOf(item);
//     movies[index] = { ...item };
//     movies[index].liked = !movies[index].liked;
//     this.setState({ movies });
//   }
//   handlePageChange = (pageIndex) => {
//     this.setState({ currentPage: pageIndex });
//   }
//   handleGenreSelect = (genre) => {
//     this.setState({ selectedGenre: genre, currentPage: 1 });

//   }
//   render() {
//     const { length: count } = this.state.movies;
//     const { pageSize, currentPage, selectedGenre, movies:allMovies} = this.state;
//     const filterd = selectedGenre && selectedGenre._id  ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
//     const movies = paginated(filterd, pageSize , currentPage);
    
//     if (count === 0) return <p>There are no movies in the databas</p>;
//   return (
//     <main className="container">
//       <div class="row">
//         <div className="col-3">
//         <ListGroup
//           items={this.state.genres}
//           onItemSelect={this.handleGenreSelect}
//           selectedItem = {this.state.selectedGenre}
//           />
//         </div>
//         <div className="col">
//           <p>Showing {filterd.length} movies in the database</p>
//       <table className="table  table-lg">
//         <thead >
//         <tr>
//           <th scope='col'>Title</th>
//           <th scope='col'>Genre</th>
//           <th scope='col'>stock</th>
//           <th scope='col'>Rate</th>
//           <th scope='col'></th>
//           <th scope='col'></th>
//         </tr>
//         </thead>
//         <tbody>{ this.renderList(movies) }</tbody>
//         </table>
//         <Pagination
//           itemsCount={filterd.length}
//           pageSize={pageSize}
//           currentPage = {currentPage}
//           onPageChange = {this.handlePageChange}
//           />
//           </div>
//       </div>
//     </main>
//   );
//   }
//   renderList(movies) {
//   return movies.map(item => {
//     return (<tr key={item._id}>
//     <td>{ item.title }</td>
//     <td>{ item.genre.name}</td>
//     <td>{ item.numberInStock }</td>
//     <td>{item.dailyRentalRate}</td>
//     <td><Like liked={ item.liked } onClick={() => this.handleLike(item)} /></td>
//     <td><button onClick={() => this.handleDelete(item)} key={item._id} className='btn btn-danger btn-sm'>Delete</button></td>
//     </tr>)
//   })
//   }
// }
// export default Movies;
import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import paginate from '../utils/paginate';

class Movies extends Component {
 state = { 
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
 }

 handleDelete = item => {
    const movies = this.state.movies.filter(m => m._id !== item._id);
    this.setState({
    movies,
  })
  }
  
  handleLike = item => {
    const movies = this.state.movies;
    const index = movies.indexOf(item);
    movies[index] = { ...item };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }
  
  handlePageChange = item => {
    const currentPage = item;
    this.setState({ currentPage });
  }
  render() { 
    const { movies: allMovies, currentPage, pageSize } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    const { length: count } = allMovies;
  if (count === 0) return <p>There are no movies in the databas</p>;
  return (
    <React.Fragment>
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