import React, { Component } from 'react';

import '../App.css';

class DashboardContainer extends Component {
  render() {
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
