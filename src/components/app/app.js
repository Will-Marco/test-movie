import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          name: "Interstellar",
          viewers: "1964004",
          favourite: true,
        },
        {
          id: uuidv4(),
          name: "Incaption",
          viewers: "2450544",
          favourite: false,
        },
        {
          id: uuidv4(),
          name: "Tenet",
          viewers: "551000",
          favourite: false,
        },
        {
          id: uuidv4(),
          name: "Oppenheimer",
          viewers: "358000",
          favourite: true,
        },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      // const idx = data.findIndex((c) => c.id === id);
      // data.slice(idx, 1); //mutabel
      data: data.filter((c) => c.id !== id), //immutable
    }));
  };

  addForm = (item) => {
    this.setState(({ data }) => ({
      data: [...data, { ...item }],
    }));
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList data={this.state.data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
