import axios from 'axios'


class HttpService {
    get(path) {

        const instance = axios.create({
            baseURL: 'http://crud-api.hypetech.xyz/v1',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V' /* ovo je sifra iz projekta za Apija, nema veze sa axious*/,
                'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,

            }
        })

        return instance.get(path)
    }

    post(path, data) {
        const instance = axios.create({
            baseURL: 'http://crud-api.hypetech.xyz/v1',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        })

        return instance.post(path, data)
    }
}



export const http = new HttpService()




























