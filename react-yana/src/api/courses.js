import api from './init'

//read: list

export function list() {
  return api.get('/courses')
  .then(res => res.data)
}
