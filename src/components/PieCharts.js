import React, { Component } from 'react'

import ReactChartkick, { PieChart } from 'react-chartkick'

import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)



class PieCharts extends Component {
  render() {
    console.log('this.props.ticker is::: ', this.props.ticker)
    console.log('this.props.global is::: ', this.props.global)

    let tickerData = this.props.ticker //this is an object
    let globalData = this.props.global //this is an object

    if (tickerData && globalData) {
      var tickerArray = Object.values(tickerData) //create array from object, tickerData

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
        {/* <h1>
          This is the PieCharts component.
        </h1> */}

        {/* <PieChart data={[["Blueberry", 1344], ["Strawberry", 23]]} /> */}

        {/* [ [name, quotes.USD.market_cap], ] */}

        <div id="charts">

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

            <br></br>

            <div>
              Total volume in last 24 hours: {globalData ? globalData.quotes.USD.total_volume_24h.toLocaleString() : "shrug"}
            </div>

            <br></br>

            <div>
              Bitcoin percentage of market cap: {globalData ? globalData.bitcoin_percentage_of_market_cap.toLocaleString() : "shrug"}%
            </div>
            <div>
              Total cryptocurrency market cap (USD): ${globalData ? globalData.quotes.USD.total_market_cap.toLocaleString() : "shrug"}
            </div>

          </div> {/* pie chart div */}



        </div>
        </div>
  )
}
}
export default PieCharts
