import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api',
  withCredentials: true
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  logout() {
    localStorage.removeItem('user')
    return service
      .get('/logout')
  },

  getCountries() {
    return service
      .get('/countries')
      .then(res => res.data)
      .catch(errHandler)
  },

  postCountries(data) {
    return service
      .post('/countries', data)
      .then(res => res.data)
      .catch(errHandler)
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler)
  },



  addPicture(file) {
    const formData = new FormData()
    formData.append("picture", file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },
}
