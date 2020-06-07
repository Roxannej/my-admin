import axios from '../config/httpConfig'

export function fetchPermission () {
  return axios.get('../../static/permisssion.json')
}

export function login () {
  return axios.get('../../static/login.json')
}
