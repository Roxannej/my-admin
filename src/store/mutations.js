import { LOGIN_IN, LOGIN_OUT } from './mutationType.js'
export default {
  [LOGIN_IN] (state, token) {
    state.UserToken = token
  },
  [LOGIN_OUT] (state) {
    state.UserToken = ''
  }
}
