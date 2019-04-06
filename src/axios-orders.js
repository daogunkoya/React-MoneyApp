import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost/laravel-moneytransfer/api/'
});

export default instance