import React, { Component } from 'react'

class ShowTicker extends Component {
  render() {
    console.log('this.props.ticker.data is::: ', this.props.ticker.data)
    return (
      <div>
        <h1>
          This is the ShowTicker component.
        </h1>

          {this.props.ticker.data ?
            this.props.ticker.data.map( (coin, index) =>
              <div key={index}>
                <h1>
                  {coin.name}
                </h1>
                <div>
                  id: {coin.id}
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
            "no data..." }
      </div>
    )
  }
}
export default ShowTicker
