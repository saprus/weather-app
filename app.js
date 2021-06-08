const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv[2])  -->> process.argv shows us the array of command line args entered 

// if there is no address entered in the command line
if (!process.argv[2]) {
    console.log("No address provided")
}
else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log('Error: ' + error)
        }
        const { latitude, longitude , location} = data  // destructuring

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error: ', error)
            }
            else {
                console.log(location)
                console.log('Weather:', JSON.stringify(forecastData))
            }
        })

    })
}
 
