import axios from 'axios';

// https://jsonplaceholder.typicode.com/users
// METHOD TO INITIATE API REQUEST
const FETCHING_API = (args = '') => axios.get(
  'https://api.github.com' + args
);

export {FETCHING_API};
