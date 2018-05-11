import React, { Component } from 'react'

class ShowTicker extends Component {
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

    function timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp * 1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
      return time;
    }

    return (
      <div id="showTicker-div">
        {/* <h1>
          This is the ShowTicker component.
        </h1> */}

        Number of cryptocurrencies show below, in order of rank: {tickerLength}

        {tickerArray ?
          tickerArray.map( (coin, index) =>
          <div key={index}>
            <h1>
              {coin.name ? coin.name : "no data"}
            </h1>
            <div>
              rank: {coin.rank ? coin.rank.toLocaleString() : "no data"}
            </div>
            <div>
              symbol: {coin.symbol ? coin.symbol : "no data"}
            </div>
            <div>
              circulating supply: {coin.circulating_supply ? coin.circulating_supply.toLocaleString() : "no data"}
            </div>
            <div>
              total supply: {coin.total_supply ? coin.total_supply.toLocaleString() : "no data"}
            </div>
            <div>
              max supply: {coin.max_supply ? coin.max_supply.toLocaleString() : "null"}
            </div>
            <div>
              last updated: {coin.last_updated ?
                timeConverter(coin.last_updated)
                : "no data"}
            </div>
            {/* last updated: {coin.last_updated ? new Date(coin.last_updated * 1000) : "no data"} */}


            <h2>
              quotes, in USD:
            </h2>

            <div>
              market cap: ${coin.quotes.USD.market_cap ? coin.quotes.USD.market_cap.toLocaleString() : "no data"}
            </div>

            <div>
              price: ${coin.quotes.USD.price ? coin.quotes.USD.price.toLocaleString() : "no data"}
            </div>

            <div>
              percent change 1h: <span className={coin.quotes.USD.percent_change_1h > 0 ? "green" : "red"}>
                {coin.quotes.USD.percent_change_1h ? coin.quotes.USD.percent_change_1h.toLocaleString() : "no data"}
              </span>%
            </div>

            <div>
              percent change 7d: <span className={coin.quotes.USD.percent_change_7d > 0 ? "green" : "red"}>
                {coin.quotes.USD.percent_change_7d ? coin.quotes.USD.percent_change_7d.toLocaleString() : "no data"}
              </span>%
            </div>

            <div>
              percent change 24h: <span className={coin.quotes.USD.percent_change_24h > 0 ? "green" : "red"}>
                {coin.quotes.USD.percent_change_24h ? coin.quotes.USD.percent_change_24h.toLocaleString() : "no data"}
              </span>%
            </div>

            <div>
              volume 24h: {coin.quotes.USD.volume_24h ? coin.quotes.USD.volume_24h.toLocaleString() : "no data"}
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
