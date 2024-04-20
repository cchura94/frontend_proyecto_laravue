import axios from 'axios';

let urlBackend = 'http://127.0.0.1:8000/api';

export function Api(){

    let token = atob(localStorage.getItem("access_token"));

    let api = axios.create({
        baseURL: urlBackend,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
        },
        timeout: 60000
    });

    return api;
}
