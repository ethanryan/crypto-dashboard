import React, { Component } from 'react'

class ShowListings extends Component {
  render() {
    console.log('this.props.listings.data is::: ', this.props.listings.data)
    return (
      <div>
        <h1>
          This is the ShowListings component.
        </h1>

          {this.props.listings.data ?
            this.props.listings.data.map( (coin, index) =>
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
export default ShowListings
