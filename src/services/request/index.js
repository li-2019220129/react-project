import axios from 'axios'
import { BASEURL, TIME_OUT } from './config'
class LzyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
    this.instance.interceptors.request.use((config) => {
      return config
    })
    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }
  request(config) {
    return this.instance.request(config)
  }
  post(config) {
    return this.request({
      ...config,
      methods:'POST'
    })
  }
  get(config) {
    return this.request({
      ...config,
      methods:'GET'
    })
  }
}

export default new LzyRequest(BASEURL, TIME_OUT)
