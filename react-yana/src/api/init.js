import axios from 'axios'

const axiosapi = axios.create({
  baseURL: process.env.BASE_URL
})

export default axiosapi
