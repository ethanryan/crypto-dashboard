const baseUrl = 'https://api.coinmarketcap.com/v2'

export function getListings() {
  console.log('0. calling getListings...')
  return fetch(`${baseUrl}/listings/`)
  .then( console.log('step 1, returning response.json()...') )
  .then( response => response.json() )
}

export function getTicker() {
  console.log('0. calling getTicker...')
  return fetch(`${baseUrl}/ticker/`)
  .then( console.log('step 1, returning response.json()...') )
  .then( response => response.json() )
}

export function getGlobal() {
  console.log('0. calling getGlobal...')
  return fetch(`${baseUrl}/global/`)
  .then( console.log('step 1, returning response.json()...') )
  .then( response => response.json() )
}
