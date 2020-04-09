import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID B4JuMNnzu-Y0GhLDUobvYt-34kZ0Pz0eQuxMwYQWKkY'
    }
})