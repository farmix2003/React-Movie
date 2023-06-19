const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
    <div class="card movie" key={imdbID}>
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={Poster} alt="Img" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
};

export default Movie;
