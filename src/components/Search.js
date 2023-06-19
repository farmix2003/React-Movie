import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };
  keyDown = (e) => {
    if (e.key === "Enter") {
      this.props.SearchMovies(this.state.search, this.state.type);
    }
  };
  sortHandler = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.SearchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div class="row">
        <div class="input-field">
          <input
            id="email_inline"
            placeholder="Search"
            type="search"
            class="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.keyDown}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.SearchMovies(this.state.search, this.state.type)
            }
          >
            Search Movies
          </button>
        </div>

        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.sortHandler}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.sortHandler}
              checked={this.state.type === "movie"}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.sortHandler}
              checked={this.state.type === "series"}
            />
            <span>Series Only </span>
          </label>
        </div>
      </div>
    );
  }
}
