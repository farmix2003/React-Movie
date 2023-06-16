import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";
export default class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=b8202e0a&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  SearchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=b8202e0a&s=${str}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    return (
      <div className="container content">
        <Search SearchMovies={this.SearchMovies} />
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
