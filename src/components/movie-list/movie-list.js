import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";

const MovieList = ({ data }) => {
  return (
    <ul className="movie-list list-group">
      {data.map((item) => (
        <MovieListItem {...item}/>
      ))}
    </ul>
  );
};

export default MovieList;
