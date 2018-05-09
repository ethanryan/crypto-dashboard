import React, { Component } from 'react'

class ShowTicker extends Component {
  render() {
    console.log('this.props.ticker[0] is::: ', this.props.ticker[0])

    let tickerData = this.props.ticker[0] //this is an object

    if (tickerData) {
      var tickerArray = Object.values(tickerData) //create array from object, this.props.ticker[0]

      tickerArray = tickerArray.sort(function(a, b) {
        return a.rank - b.rank;
      });

      var tickerLength = tickerArray.length
      console.log('tickerLength is::: ', tickerLength)
      console.log('tickerArray is::: ', tickerArray)
      console.log('tickerArray[0] is::: ', tickerArray[0])
    }



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
              rank: {coin.rank}
            </div>
            <div>
              symbol: {coin.symbol}
            </div>
            <div>
              circulating supply: {coin.circulating_supply}
            </div>
            <div>
              total supply: {coin.total_supply}
            </div>
            <div>
              max supply: {coin.max_supply ? coin.max_supply : "null"}
            </div>
            <div>
              last updated: {coin.last_updated}
            </div>
            <div>

              <h2>
                quotes, in USD:
              </h2>

                price: ${coin.quotes.USD.price}
              </div>

              <div>
                percent change 1h: {coin.quotes.USD.percent_change_1h}%
              </div>

              <div>
                percent change 7d: {coin.quotes.USD.percent_change_7d}%
              </div>

              {/* <div>
                percent change 24h: <span className={coin.quotes.USD.percent_change_24h > 0 ? "green" : "red"}>
                  {coin.quotes.USD.percent_change_24h}
                </span>%
              </div> */}

              {/* replace below with above... */}

              <div>
                percent change 24h: {coin.quotes.USD.percent_change_24h}%
              </div>

              <div>
                volume 24h: {coin.quotes.USD.volume_24h}
              </div>
            <div>

              -----------
            </div>
          </div>
        )
        :
        <h1>
          {"no tickerData..."}
        </h1>
      }
      </div>
    )
  }
}
export default ShowTicker
