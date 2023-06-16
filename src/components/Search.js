import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
  };
  keyDown = (e) => {
    if (e.key === "Enter") {
      this.props.SearchMovies(this.state.search);
    }
  };
  render() {
    return (
      <div class="row">
        <div class="col s12">
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
              onClick={() => this.props.SearchMovies(this.state.search)}
            >
              Search Movies
            </button>
          </div>
        </div>
      </div>
    );
  }
}
