
const list = window.localStorage.getItem('employeeList')
const state = {
  employeeList: list ? JSON.parse(list) : employeeList,
  loaded: false,
}
const setState = function (key, value) {
  state[key] = value
  window.localStorage.setItem(key, JSON.stringify(value))
}
