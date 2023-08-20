import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./movies-add-form.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  changeHandlerInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addForm({
      id: uuidv4(),
      name: this.state.name,
      viewers: this.state.views,
    });
    this.setState({
      name: "",
      views: "",
    });
  };

  render() {
    const { name, views } = this.state;
    return (
      <div className="app-add-form">
        <h3>Yangi kino qo'shish</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Qanday kino?"
            name="name"
            value={name}
            onChange={this.changeHandlerInput}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan?"
            name="views"
            value={views}
            onChange={this.changeHandlerInput}
          />

          <button type="submit" className="btn btn-outline-dark">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MoviesAddForm;
