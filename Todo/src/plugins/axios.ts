import axios from 'axios'
export default {
  install(app: any) {
    app.provide('axios', axios)
  }
}
