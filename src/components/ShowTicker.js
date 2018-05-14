import React, { Component } from 'react'

import { Card, Statistic, Button } from 'semantic-ui-react'

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

          <div key={index} id={coin.rank ? coin.rank : "no data"}>
            <Card fluid color='orange'>
              <Card.Content>

                {/* <Statistic>
                  <Statistic.Value>5,550</Statistic.Value>
                  <Statistic.Label>Downloads</Statistic.Label>
                </Statistic> */}

                <Card.Header>
                  <h1>
                    {coin.name ? coin.name : "no data"}
                  </h1>
                  rank: {coin.rank ? coin.rank : "no data"}
                </Card.Header>

                <Card.Meta>
                  symbol: {coin.symbol ? coin.symbol : "no data"}
                </Card.Meta>

                <Card.Description>
                  <div>
                    circulating supply: {coin.circulating_supply ? coin.circulating_supply.toLocaleString() : "no data"}
                  </div>
                  <div>
                    total supply: {coin.total_supply ? coin.total_supply.toLocaleString() : "no data"}
                  </div>
                  <div>
                    max supply: {coin.max_supply ? coin.max_supply.toLocaleString() : "null"}
                  </div>
                </Card.Description>

                <br></br>

                <Card.Description>
                  <h3>
                    Quotes, in USD:
                  </h3>

                  <div>
                    <Statistic>
                      <Statistic.Value>${coin.quotes.USD.market_cap ? coin.quotes.USD.market_cap.toLocaleString() : "no data"}</Statistic.Value>
                      <Statistic.Label>market cap</Statistic.Label>
                    </Statistic>
                  </div>

                  <br></br>

                  <div>
                    <Statistic size='small'>
                      <Statistic.Value>${coin.quotes.USD.price ? coin.quotes.USD.price.toLocaleString() : "no data"}</Statistic.Value>
                      <Statistic.Label>Price</Statistic.Label>
                    </Statistic>
                    {/* price: ${coin.quotes.USD.price ? coin.quotes.USD.price.toLocaleString() : "no data"} */}
                  </div>

                  <br></br>

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
                </Card.Description>

                <br></br>

                <Card.Content extra>
                  last updated: {coin.last_updated ?
                    timeConverter(coin.last_updated)
                    : "no data"}
                  </Card.Content>
                  {/* last updated: {coin.last_updated ? new Date(coin.last_updated * 1000) : "no data"} */}

                  <Button
                    primary
                    onClick={this.props.scrollToTop}
                    >
                      Scroll To Top
                  </Button>
                </Card.Content>
              </Card>

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
