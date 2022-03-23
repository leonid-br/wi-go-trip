import axios from 'axios';

const BASE_URL = 'https://wegotrip.com/api/v2/stats/plot';

axios.defaults.baseURL = BASE_URL;

const data = async () => {
    try {
        const res = await axios.get(BASE_URL);

        return res;
    } catch (error) {
        console.log(error.message);
    }
};

export default data;
