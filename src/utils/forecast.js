const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c020eb7a199fe77de44b297c28c41ea0&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location.')
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + 
                body.current.feelslike + " degrees out. The humidity is " +  body.current.humidity + '%. The wind speed is ' +
                body.current.wind_speed + " km/h (" + body.current.wind_dir + ")."
            )
        }
    })
}

module.exports = forecast