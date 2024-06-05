import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'x-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json'
  }
})

export default {
  getUser(name) {
    return api.get(`/users/${name}`)
  }
}
