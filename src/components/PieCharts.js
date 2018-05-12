import React, { Component } from 'react'

import ReactChartkick, { PieChart } from 'react-chartkick'

import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class PieCharts extends Component {
  render() {
    // console.log('this.props.ticker is::: ', this.props.ticker)
    // console.log('this.props.global is::: ', this.props.global)


    let tickerData = this.props.ticker //this is an object
    let globalData = this.props.global //this is an object

    console.log('tickerData is: ', tickerData)
    console.log('globalData is: ', globalData)

    if (tickerData && globalData) {
      var tickerArray = Object.values(tickerData) //create array from object, tickerData

      tickerArray = tickerArray.sort(function(a, b) {
        return a.rank - b.rank;
      });

      var coinRankOne = tickerArray[0]
      var coinRankTwo = tickerArray[1]
      var coinRankThree = tickerArray[2]

      // var pieChartData = tickerArray.map( coin => coin.name, coin.quotes.USD.market_cap )
      var pieChartDataTopOneHundred = tickerArray.map(function(coin) {
        return [coin.name, coin.quotes.USD.market_cap]
      })

      // var pieChartDataFirstTwenty = pieChartData.slice(0, 20)
      var pieChartDataTopTen = pieChartDataTopOneHundred.slice(0, 10)

      var totalMarketCapArray = ["Total Market Cap", globalData.quotes.USD.total_market_cap]

      var pieChartDataTotalMarketCap = [
        [tickerArray[0].name, tickerArray[0].quotes.USD.market_cap],
        [tickerArray[1].name, tickerArray[1].quotes.USD.market_cap],
        [tickerArray[2].name, tickerArray[2].quotes.USD.market_cap],
        ["Rest of Total Crypto Market Cap", globalData.quotes.USD.total_market_cap - tickerArray[0].quotes.USD.market_cap - tickerArray[1].quotes.USD.market_cap - tickerArray[2].quotes.USD.market_cap]
      ]

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

        {/* <PieChart data={[["Blueberry", 2], ["Strawberry", 12]]} /> */}

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

            <h2>
              Top three cryptocurrencies by market cap, as a fraction of the total market cap of all cryptocurrencies:
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

            {/* this lists bitcoin percentage from globalData, but i want top three coins, so using coinRank data... */}
            {/* <div>
              Bitcoin percentage of market cap: {globalData ? globalData.bitcoin_percentage_of_market_cap.toLocaleString() : "shrug"}%
            </div> */}

            <div>
              The #1 ranked coin, {tickerData && globalData ? coinRankOne.name : "no data"}, percentage of the total market cap: {tickerData && globalData ? (coinRankOne.quotes.USD.market_cap / globalData.quotes.USD.total_market_cap * 100).toFixed(2) : "no data"}%
            </div>
            <div>
              The #2 ranked coin, {tickerData && globalData ? coinRankTwo.name : "no data"}, percentage of the total market cap: {tickerData && globalData ? (coinRankTwo.quotes.USD.market_cap / globalData.quotes.USD.total_market_cap * 100).toFixed(2) : "no data"}%
            </div>
            <div>
              The #3 ranked coin, {tickerData && globalData ? coinRankThree.name : "no data"}, percentage of the total market cap: {tickerData && globalData ? (coinRankThree.quotes.USD.market_cap / globalData.quotes.USD.total_market_cap * 100).toFixed(2) : "no data"}%
            </div>
            <div>
              Percentage of the total market cap, minus the top three ranked coins: {globalData && tickerData ? ( (globalData.quotes.USD.total_market_cap - coinRankOne.quotes.USD.market_cap - coinRankTwo.quotes.USD.market_cap - coinRankThree.quotes.USD.market_cap) / globalData.quotes.USD.total_market_cap * 100).toFixed(2) : "no data"}%
            </div>

            <br></br>

            <div>
              Total cryptocurrency market cap (USD): ${globalData ? globalData.quotes.USD.total_market_cap.toLocaleString() : "shrug"}
            </div>


        </div>
        </div>
  )
}
}
export default PieCharts
