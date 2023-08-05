import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", DailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label(`Number in Stock`),
    DailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label(`Daily Rental Rate`),
  };
  doSubmit = () => {
    //Call the sever
    console.log("Saved");
    this.props.navigate("/movies");
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
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
          {this.renderInput("DailyRentalRate", "Daily Rental Rate")}
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
