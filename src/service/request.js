
import axios from 'axios'

const baseURL = 'http://123.207.32.32:9001'

function request(options = {}){
  

  axios.interceptors.request.use((config)=>{

    return config
  })


  axios.interceptors.response.use((response)=>{

    return response
  })

  return axios({
    method:options.method || 'get',
    baseURL,
    url:options.url
  })
}


export default request