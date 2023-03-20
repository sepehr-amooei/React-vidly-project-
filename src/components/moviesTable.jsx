import React from 'react';
import Like from './common/like';

const MoviesTable = ({movies, order, onDelete, onLike, onSort}) => {
 return ( 
  <table className="table">
   <thead>
     <tr>
      <th  scope="col">Title<i style={{cursor : 'pointer'}} onClick={() => onSort('title')} className="fa fa-sort m-2" aria-hidden="true"></i></th>
      
      <th  scope="col">Genre<i style={{cursor : 'pointer'}} onClick ={() => onSort('genre.name')} className="fa fa-sort m-2" aria-hidden="true"></i></th>
      <th  scope="col">Stock<i style={{cursor : 'pointer'}} onClick ={() => onSort('numberInStock')} className="fa fa-sort m-2" aria-hidden="true"></i></th>
      <th  scope="col">Rate<i style={{cursor : 'pointer'}} onClick ={() => onSort('dailyRentalRate')} className="fa fa-sort m-2" aria-hidden="true"></i></th>
      <th scope="col"></th>
      <th scope="col"></th>
     </tr>
    </thead>
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

export default MoviesTable;