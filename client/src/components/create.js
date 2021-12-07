import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonAge = this.onChangePersonAge.bind(this);
    this.onChangePersonLevel = this.onChangePersonLevel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      person_age: "",
      person_level: "",
    };
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangePersonAge(e) {
    this.setState({
      person_age: e.target.value,
    });
  }

  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_age: this.state.person_age,
      person_level: this.state.person_level,
    };

    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_age: "",
      person_level: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name of the person: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Person's position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_age}
              onChange={this.onChangePersonAge}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="0"
                checked={this.state.person_level === "0"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">0</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="2"
                checked={this.state.person_level === "2"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="4"
                checked={this.state.person_level === "4"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">4</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create person"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
