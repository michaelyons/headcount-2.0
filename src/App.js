import React, { Component } from "react";
import DistrictsContainer from "./DistrictsContainer";
import DistrictRepository from "./helper";
import kinderData from "./data/kindergartners_in_full_day_program";
import PropTypes from "prop-types";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      schoolData: {}
    };
  }

  componentDidMount() {
    const schoolData = new DistrictRepository(kinderData);
    this.setState({
      schoolData
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <DistrictsContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

DistrictsContainer.propTypes = {
  schoolData: PropTypes.object.isRequired
};

export default App;
