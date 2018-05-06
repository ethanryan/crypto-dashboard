import React, { Component } from 'react'

class ShowListings extends Component {
  render() {
    console.log('this.props.listings.data is::: ', this.props.listings.data)
    return (
      <div>
        <h1>
          This is the ShowListings component.
        </h1>
        first listing is: {this.props.listings.data ? this.props.listings.data[0].name: 'name here...'}
      </div>
    )
  }
}
export default ShowListings
