import React, { Component } from 'react'

class ShowTicker extends Component {
  render() {
    console.log('this.props.ticker[0] is::: ', this.props.ticker[0])

    let tickerData = this.props.ticker[0] //this is an object

    if (tickerData) {
      var tickerArray = Object.values(tickerData) //create array from object, this.props.ticker[0]
      var tickerLength = tickerArray.length
    }

    console.log('tickerLength is::: ', tickerLength)


    return (
      <div>
        <h1>
          This is the ShowTicker component.
        </h1>

        Number of cryptocurrencies show below, in order of rank: {tickerLength}

          {tickerData ?
            tickerArray.map( (coin, index) =>
              <div key={index}>
                <h1>
                  {coin.name}
                </h1>
                <div>
                  id: {coin.id}
                </div>
                <div>
                  rank: {coin.rank}
                </div>
                <div>
                  symbol: {coin.symbol}
                </div>
                <div>

                  -----------
                </div>
              </div>
            )
            :
            "no tickerData..." }
      </div>
    )
  }
}
export default ShowTicker
