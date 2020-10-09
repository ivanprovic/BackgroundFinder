import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
                Authorization: 'Client-ID nD7HI-EX6Sv8eEf3l1dg8GnoqwimLRI1vuYIdRdNbqQ' 
            }
});