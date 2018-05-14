import React, { Component } from 'react'

import { Grid } from 'semantic-ui-react'

class Index extends Component {
  render() {
    // console.log('this.props.ticker is::: ', this.props.ticker)
    // console.log('this.props.global is::: ', this.props.global)

    let tickerData = this.props.ticker //this is an object
    let globalData = this.props.global //this is an object

    if (tickerData && globalData) {
      var tickerArray = Object.values(tickerData) //create array from object, tickerData

      tickerArray = tickerArray.sort(function(a, b) {
        return a.rank - b.rank;
      });

      var tickerLength = tickerArray.length
    }

    return (
      <div id="index">
        <p>
          INDEX
        </p>

        <p>
          <a href="pie1">
            Pie Chart 1: Top ten cryptocurrencies by market cap
          </a>
        </p>
        <p>
          <a href="pie2">
            Pie Chart 1: Top 100 cryptocurrencies by market cap
          </a>
        </p>
        <p>
          <a href="pie3">
            Pie Chart 1: Top three cryptocurrencies by market cap, as a fraction of the total market cap of all cryptocurrencies
          </a>
        </p>

        <Grid>
          {tickerArray ?
            tickerArray.map( (coin, index) =>
            <div key={index}>
              <a href={'#' + coin.rank}>
                <Grid.Column>
                  {coin.rank ? coin.rank.toLocaleString() : "no data"}. {coin.name ? coin.name : "no data"}
                </Grid.Column>
              </a>
            </div>
          )
          :
          <div className="center">
            {"no tickerData..."}
          </div>
        }
      </Grid>
    </div>
  )
}
}
export default Index
