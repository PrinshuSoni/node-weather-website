const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c020eb7a199fe77de44b297c28c41ea0&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. There is " +  body.current.humidity + '% of humidity in the air.')
        }
    })
}

module.exports = forecast