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
          favourite: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: "Incaption",
          viewers: "2450544",
          favourite: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: "Tenet",
          viewers: "551000",
          favourite: false,
          like: false,
        },
        {
          id: uuidv4(),
          name: "Oppenheimer",
          viewers: "358000",
          favourite: false,
          like: false,
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
    const newItem = {
      id: uuidv4(),
      name: item.name,
      viewers: item.viewers,
      favourite: false,
      like: false,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) return { ...item, [prop]: !item[prop] };
        return item;
      }),
    }));
  };

  render() {
    const { data } = this.state;
    
    return (
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className="search-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieList
            onToggleProp={this.onToggleProp}
            data={data}
            onDelete={this.onDelete}
          />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
