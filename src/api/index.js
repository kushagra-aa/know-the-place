import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
        let options = {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'ea7fcec8dbmshb2fa145e767680dp1857c4jsn98b097af39d3'
            }
        };
        // request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, options)
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
                lon: lng,
                lat: lat,
            },
            headers: {
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'ea7fcec8dbmshb2fa145e767680dp1857c4jsn98b097af39d3'
            }
        })
        return data;
    } catch (error) {
        console.log(error)
    }
}