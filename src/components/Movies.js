import Movie from "./Movie";

const Movies = (props) => {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbId} {...movie} />)
      ) : (
        <div className="not-found">
          <h1>404</h1>

          <div class="frame">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="caps">
            <img src="http://ademilter.com/caps.png" alt="" />
          </div>
          <canvas id="canvas"></canvas>
        </div>
      )}
    </div>
  );
};

export default Movies;
