const fetch = require('node-fetch');
const config = require('../config')

exports.getWeather = async (req, res) => {
    const URI = config.URI_API_TOKEN + `${req.body.lat},${req.body.lng}`
    await fetch(URI)
        .then(responseToJson => responseToJson.json())
        .then(response => {
            //const newResponse = [responseToJson];
            //const mapWeather = newResponse.map((mapTime) => { return mapTime.currently });
            res.status(200).json(response.currently)
        })
        .catch((err) => {
            res.status(500).send({ message: `Error al consultar Api DarkSky ${err}` });
        });
}