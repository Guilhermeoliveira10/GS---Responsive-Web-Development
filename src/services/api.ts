import axios from 'axios'

const api = axios.create({
  baseURL: 'link-api',
})

export default api
