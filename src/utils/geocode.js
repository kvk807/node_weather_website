const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3ZrODA3IiwiYSI6ImNqdHhqb3VlYTFiajY0ZHF5OXQ1dGNmM3QifQ.J9vBwr8EofvLKUExaiZsug'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location service!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find that location.  Please try again', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}
module.exports = geocode
