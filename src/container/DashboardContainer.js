import React, { Component } from 'react';

import '../App.css';

import * as api from '../api'

// import ShowListings from '../components/ShowListings';
import ShowTicker from '../components/ShowTicker';

import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class DashboardContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      ticker: []
    }
  }

  componentDidMount() {
    // console.log('componentDidMount, calling api.getListings from DashboardContainer...')
    api.getListings()
    .then(response => this.setState({
      listings: response
    }))
    // console.log('step 2, setting state of listings to response from promise...')

    console.log('componentDidMount, calling api.getTicker from DashboardContainer...')
    api.getTicker()
    .then(response => this.setState({
      ticker: Object.values(response) //converting object into array
    }))
    console.log('step 2, setting state of ticker to response from promise...')
  }

  render() {
    console.log('this.state is: ' , this.state)
    return (
      <div className="DashboardContainer">
        <header className="DashboardContainer-header">
          <h1>Welcome to Crypto Dashboard</h1>

          <h1>Trying Chartkick</h1>
        </header>
        <p className="DashboardContainer-intro">
          Crytocurrency coin information will be listed below.
        </p>

        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />

        {/* <ShowListings
          listings={this.state.listings}
        /> */}

        <ShowTicker
          ticker={this.state.ticker}
        />

      </div>
    );
  }
}
export default DashboardContainer;
