import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().uppercase().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label(`Number in Stock`),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label(`Daily Rental Rate`),
  };
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.navigate("/movies");
  };

  componentDidMount() {
    const { params, navigate } = this.props;
    const genres = getGenres();
    this.setState({ genres });

    if (params.id === "new") return;

    const movie = getMovie(params.id);
    if (!movie) return navigate("/not-found", { replace: true });
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  render() {
    const { params } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Movie Form {params.id}</h1>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export function MovieFormWithRouter(props) {
  const navigate = useNavigate();
  const params = useParams();
  return <MovieForm navigate={navigate} params={params}></MovieForm>;
}

export default MovieForm;
