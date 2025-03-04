const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
  const options = {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?place_id=7jNqZtPa5Cjf333k7&key=7d81dfb687msh03ea9e536c02a47p15d9a4jsn5b577332253c',
    params: {
      address: address, // Corrected: use input parameter
      language: 'en',
      region: 'en'
    },
    headers: {
      'x-rapidapi-key': process.env.GOOGLE_MAPS_API,
      'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    if (response.data.status === 'OK') {
      return response.data.results[0].geometry.location;
    }
    throw new Error('No results found');
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
};