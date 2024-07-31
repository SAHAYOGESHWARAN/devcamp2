const axios = require('axios');
const ErrorResponse = require('../utils/ErrorResponse'); // Corrected path

const geocode = async (address) => {
    try {
        const response = await axios.get('https://www.mapquestapi.com/geocoding/v1/address', {
            params: {
                key: process.env.MAPQUEST_API_KEY, // Ensure this is set in your environment variables
                location: address
            }
        });

        if (response.data.info.statuscode !== 0) {
            throw new ErrorResponse('Error fetching geocode data from MapQuest', 500);
        }

        const location = response.data.results[0].locations[0];
        return {
            latitude: location.latLng.lat,
            longitude: location.latLng.lng,
            formattedAddress: `${location.street}, ${location.adminArea5}, ${location.adminArea3}, ${location.postalCode}, ${location.adminArea1}`
        };
    } catch (error) {
        throw new ErrorResponse(error.message, error.response ? error.response.status : 500);
    }
};

module.exports = {
    geocode
};
