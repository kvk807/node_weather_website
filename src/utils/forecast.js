const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = 'https://api.darksky.net/forecast/a85e311601e4208097f0139727042209/' + lat + ',' + lon

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find your location.', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + (body.currently.precipProbability * 100) + '% chance of rain.')
    }
  })
}

module.exports = forecast
