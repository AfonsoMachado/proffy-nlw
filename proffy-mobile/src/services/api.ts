import axios from 'axios'

const api = axios.create({
  // URL indicada no expo com a porta do backend, para conectar o app mobile ao backend da aplicação
  baseURL: 'http://192.168.15.5:3333'
})

export default api;