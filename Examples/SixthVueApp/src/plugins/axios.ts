import axios from 'axios'
export default {
  install(app: any) {
    app.config.globalProperties.$axios = axios
    app.provide('axios', axios)
  }
}
