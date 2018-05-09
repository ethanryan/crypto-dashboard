import React, { Component } from 'react';

import '../App.css';

import * as api from '../api'

// import ShowListings from '../components/ShowListings';
import ShowTicker from '../components/ShowTicker';


class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      ticker: [],
      global: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount, making API calls...')

    api.getListings()
    .then(response => this.setState({
      listings: response
    }))

    api.getTicker()
    .then(response => this.setState({
      ticker: Object.values(response) //converting object into array
    }))

    api.getGlobal()
    .then(response => this.setState({
      global: Object.values(response) //converting object into array
    }))
    console.log('step 2, setting state with responses from API call promises...')
  }

  render() {
    console.log('this.state is: ' , this.state)
    return (
      <div className="DashboardContainer">
        <header className="DashboardContainer-header">
          <h1>Welcome to Crypto Dashboard</h1>
        </header>
        <p className="DashboardContainer-intro">
          Crytocurrency coin information will be listed below.
        </p>

        <ShowTicker
          ticker={this.state.ticker}
          global={this.state.global[1]}
        />

      </div>
    );
  }
}
export default DashboardContainer;
