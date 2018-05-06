import React, { Component } from 'react';

import * as api from '../api'

import '../App.css';

class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
    }
  }

  componentDidMount() {
    console.log('componentDidMount, calling api.getListings from DashboardContainer...')
    api.getListings()
    .then(response => this.setState({
      listings: response
    }))
    console.log('step 2, setting state of listings to response from promise...')
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
      </div>
    );
  }
}
export default DashboardContainer;
