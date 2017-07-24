import api from './init'

//read: list

export function list() {
  return api.get('/api/courses')
  .then(res => res.data)
}

export function show(courseName) {
  return api.get('/api/courses/' + courseName)
  .then(res => res.data)
}
