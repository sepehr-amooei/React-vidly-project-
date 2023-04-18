import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';


const MovieForm = (props) => {
 let params = useParams();
 let history = useNavigate();
 return ( 
  <div>
     <h1>Movie Form {params.id}</h1>
  <button className="btn btn-primary" onClick={() => history('/movies')}>Save</button>
  </div>

  );
}
 
export default MovieForm;