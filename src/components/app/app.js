import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  const data = [
    {
      name: "Interstellar",
      viewers: "1964004",
	  favourite : true
    },
    {
      name: "Incaption",
      viewers: "2450544",
	  favourite : false
    },
    {
      name: "Tenet",
      viewers: "551000",
	  favourite : false
    },
    {
      name: "Oppenheimer",
      viewers: "358000",
	  favourite : true
    },
  ];
  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieList data={data} />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
