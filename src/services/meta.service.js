import axios from 'axios';

let urlBackend = 'https://graph.facebook.com/v18.0/106430075725576';

export function Api(){

    let api = axios.create({
        baseURL: urlBackend,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer EAATZC0PN8ZCycBO8bn0FurkrRgNXE8zF8pyZCV8yQpD01mFaRZCba4XwZB2unFr9xmsw27C3kbGDel3XTqZACSPScx28sLe7bSvItReGYJTBZAEHaQ5fiT5kzp0YoobLsWmdZA3tEsZA0W27ia2ycysymJnnQwwF35Xf03iUngfQqtQUh9Dw5ooGi32pctsx8UtlTR5qQM8ftDaUnhkYLLZCIZD'
        },
        timeout: 60000
    });

    return api;
}
