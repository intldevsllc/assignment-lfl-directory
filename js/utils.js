const Field = function ({ name, type, placeholder }) {
  const field = create('input', 'field')
  field.name = name
  field.type = type
  field.placeholder = placeholder
  return field
}

const Button = function () {
  const button = create('button')
  button.type = 'submit'
  button.innerText = 'Submit'
  return button
}

const handleSubmit = function (onSubmit) {
  return function (e) {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input')
    const values = {}
    inputs.forEach(input => {
      if (input.type === 'number') {
        values[input.name] = Number(input.value)
      } else {
        values[input.name] = input.value
      }
    })
    onSubmit(values)
  }
}

const list = window.localStorage.getItem('employeeList')
const state = {
  employeeList: list ? JSON.parse(list) : employeeList,
  loaded: false,
}
const setState = function (key, value) {
  state[key] = value
  window.localStorage.setItem(key, JSON.stringify(value))
}
