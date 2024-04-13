import axios from 'axios';

let urlBackend = 'http://127.0.0.1:8000/api';

export function Api(){

    let api = axios.create({
        baseURL: urlBackend,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer TOKEN*********'
        },
        timeout: 60000
    });

    return api;
}
