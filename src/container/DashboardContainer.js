import React, { Component } from 'react';

import '../App.css';

import * as api from '../api'

import Index from '../components/Index';
import PieCharts from '../components/PieCharts';
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

  // callAPIsContinously() {
  //   console.log("Hello!!!");
  //
  //   setInterval( () => {
  //     api.getTicker().then(response => this.setState({
  //       ticker: Object.values(response) //converting object into array
  //     }))}, 2000)
  //
  //   setInterval( () => {
  //     api.getGlobal().then(response => this.setState({
  //       global: Object.values(response) //converting object into array
  //     }))}, 2000)
  //
  //     setInterval(function(){ console.log("Hello again!!!"); }, 1000)
  //   }


  componentDidMount() {
    console.log('componentDidMount, making API calls...')

    // this.callAPIsContinously()

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

  scrollToTop() {
    console.log('scrollToTop called...')
    window.scrollTo(0, 0)
  }


  render() {

    console.log('this.state is: ' , this.state)
    return (
      <div className="center">
        <header className="DashboardContainer-header">
          <h1>Welcome to Crypto Dashboard</h1>
        </header>
        <p className="DashboardContainer-intro">
          Crytocurrency coin information will be listed below.
        </p>

        <Index
          scrollToTop={this.scrollToTop.bind(this)}
          ticker={this.state.ticker[0]}
          global={this.state.global[1]}
        />

        <PieCharts
          ticker={this.state.ticker[0]}
          global={this.state.global[1]}
        />

        <ShowTicker
          ticker={this.state.ticker[0]}
          global={this.state.global[1]}
        />

      </div>
    );
  }
}
export default DashboardContainer;
