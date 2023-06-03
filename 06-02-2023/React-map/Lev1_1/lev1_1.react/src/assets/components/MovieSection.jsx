import "./MovieSection.css";
import Data from "./Data.json";

const MovieSection = () => {
  return (
    <section>
      {Data.map((movie, index) => {
        return (
          <div className="moviebox" key={index}>
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <p>{movie.year}</p>
            <p>{movie.duration}</p>
            <p>{movie.rate}</p>
            {movie.genre.map((genre) => (
              <p className="genre">{genre}</p>
            ))}
          </div>
        );
      })}
    </section>
  );
};

export default MovieSection;
