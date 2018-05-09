import React, { Component } from 'react'

import ReactChartkick, { PieChart } from 'react-chartkick'

import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class ShowTicker extends Component {
  render() {
    console.log('this.props.ticker is::: ', this.props.ticker)
    console.log('this.props.global is::: ', this.props.global)

    let tickerData = this.props.ticker //this is an object
    let globalData = this.props.global //this is an object

    if (tickerData && globalData) {
      var tickerArray = Object.values(tickerData) //create array from object, this.props.ticker[0]

      tickerArray = tickerArray.sort(function(a, b) {
        return a.rank - b.rank;
      });

      // var pieChartData = tickerArray.map( coin => coin.name, coin.quotes.USD.market_cap )
      var pieChartDataTopOneHundred = tickerArray.map(function(coin) {
        return [coin.name, coin.quotes.USD.market_cap]
      })

      // var pieChartDataFirstTwenty = pieChartData.slice(0, 20)
      var pieChartDataTopTen = pieChartDataTopOneHundred.slice(0, 10)

      var totalMarketCapArray = ["Total Market Cap", globalData.quotes.USD.total_market_cap]

      var pieChartDataTotalMarketCap = [["Bitcoin", tickerArray[0].quotes.USD.market_cap], ["Total Market Cap", globalData.quotes.USD.total_market_cap]]

      var tickerLength = tickerArray.length
      console.log('tickerLength is::: ', tickerLength)
      // console.log('tickerArray is::: ', tickerArray)
      console.log('tickerArray[0] is::: ', tickerArray[0])
      console.log('pieChartDataTopOneHundred is::: ', pieChartDataTopOneHundred)
      console.log('globalData is::: ', globalData)
      console.log('totalMarketCapArray is::: ', totalMarketCapArray)
      // console.log('pieChartDataTopOneHundred[0] is::: ', pieChartDataTopOneHundred[0])
    }



    return (
      <div>
        <h1>
          This is the ShowTicker component.
        </h1>

        {/* <PieChart data={[["Blueberry", 1344], ["Strawberry", 23]]} />

        <br></br>
        <br></br> */}

        {/* [ [name, quotes.USD.market_cap], ] */}

        <h2>
          Top ten cryptocurrencies by market cap:
        </h2>

        <PieChart data={pieChartDataTopTen} />

        <br></br>
        <br></br>

        <h2>
          Top 100 cryptocurrencies by market cap:
        </h2>

        <PieChart data={pieChartDataTopOneHundred} />

        <br></br>
        <br></br>

      <div className="outline-here">
        <h2>
          Top cryptocurrency by market cap, as a fraction of the total market cap of all cryptocurrencies:
        </h2>

        <PieChart data={pieChartDataTotalMarketCap} />

        <div>
          Active Cryptocurrencies: {globalData ? globalData.active_cryptocurrencies.toLocaleString() : "shrug"}
        </div>
        <div>
          Active Markets: {globalData ? globalData.active_markets.toLocaleString() : "shrug"}
        </div>
        <div>
          Bitcoin percentage of market cap: {globalData ? globalData.bitcoin_percentage_of_market_cap.toLocaleString() : "shrug"}%
        </div>
        <div>
          Total cryptocurrency market cap (USD): {globalData ? globalData.quotes.USD.total_market_cap.toLocaleString() : "shrug"}
        </div>
        <div>
          Total volume in last 24 hours: {globalData ? globalData.quotes.USD.total_volume_24h.toLocaleString() : "shrug"}
        </div>

      </div>

        <br></br>
        <br></br>

        Number of cryptocurrencies show below, in order of rank: {tickerLength}

        {tickerData ?
          tickerArray.map( (coin, index) =>
          <div key={index}>
            <h1>
              {coin.name}
            </h1>
            <div>
              rank: {coin.rank.toLocaleString()}
            </div>
            <div>
              symbol: {coin.symbol}
            </div>
            <div>
              circulating supply: {coin.circulating_supply.toLocaleString()}
            </div>
            <div>
              total supply: {coin.total_supply.toLocaleString()}
            </div>
            <div>
              max supply: {coin.max_supply ? coin.max_supply.toLocaleString() : "null"}
            </div>
            <div>
              last updated: {coin.last_updated}
            </div>

              <h2>
                quotes, in USD:
              </h2>

              <div>
                market cap: ${coin.quotes.USD.market_cap.toLocaleString()}
              </div>

              <div>
                price: ${coin.quotes.USD.price.toLocaleString()}
              </div>

              <div>
                percent change 1h: {coin.quotes.USD.percent_change_1h.toLocaleString()}%
              </div>

              <div>
                percent change 7d: {coin.quotes.USD.percent_change_7d.toLocaleString()}%
              </div>

              <div>
                percent change 24h: <span className={coin.quotes.USD.percent_change_24h > 0 ? "green" : "red"}>
                  {coin.quotes.USD.percent_change_24h.toLocaleString()}
                </span>%
              </div>

              <div>
                percent change 24h: {coin.quotes.USD.percent_change_24h.toLocaleString()}%
              </div>

              <div>
                volume 24h: {coin.quotes.USD.volume_24h.toLocaleString()}
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
