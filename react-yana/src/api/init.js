import axios from 'axios'

const api = axios.create({
    baseURL: process.env.BASE_URL
})

export function setAPIToken(token) {
    // We are signed in
    if (token) {
        api.defaults.headers['Authorization'] = `JWT ${token}`
    }
    // We are signed out
    else {
        delete api.defaults.headers['Authorization']
    }
}

export default api
