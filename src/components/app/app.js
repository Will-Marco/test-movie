import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import { Context } from "../../context";

import "./app.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => {
        const newArr = json.map((item) => ({
          id: uuidv4(),
          name: item.title,
          viewers: Math.round(Math.random() * 1000000),
          favourite: item.favourite,
          like: item.like,
        }));
        dispatch({ type: "GET_DATA", payload: newArr });
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {isLoading && "Loading..."}
        <MovieList />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
