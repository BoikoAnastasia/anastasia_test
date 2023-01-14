import axios from 'axios';

const url = process.env.REACT_APP_URL

export const GetData = async (searchData = 'subject') => {
    try {
        const { data } = await axios.get(`${url}?q=${searchData}`);
        return data
    } catch (e) {
        return e
    }
}
