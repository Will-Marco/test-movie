import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = (id) => {
    setData(data.filter((c) => c.id !== id));
  };

  const addForm = (item) => {
    const newData = {
      id: uuidv4(),
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
    };
    setData([...data, newData]);
  };

  const onToggleProp = (id, prop) => {
    setData(
      data.map((item) => {
        if (item.id === id) return { ...item, [prop]: !item[prop] };
        return item;
      })
    );
  };

  const searchHandler = (data, term) => {
    if (term.length === 0) return data;
    return data.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  const filterHandler = (data, filter) => {
    switch (filter) {
      case "popular":
        return data.filter((c) => c.like);
      case "mostViewers":
        return data.filter((c) => c.viewers > 1000000);
      default:
        return data;
    }
  };

  const updateTermHandler = (term) => setTerm(term);
  const updateFilterHandler = (filter) => setFilter(filter);

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

        setData(newArr);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app font-monospace">
      <div className="content">
        <AppInfo
          allMovieCount={data.length}
          allFavouriteMovieCount={data.filter((c) => c.favourite).length}
        />
        <div className="search-panel">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>
        {isLoading && "Loading..."}
        <MovieList
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MoviesAddForm addForm={addForm} />
      </div>
    </div>
  );
}

export default App;
