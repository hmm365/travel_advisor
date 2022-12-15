import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '8cf0a4fca4mshfd7a99454350197p1c1670jsn2de6fc17cf75',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
