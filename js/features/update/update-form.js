const UpdateForm = function () {
  const form = create('form', 'form')

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'officeNum', type: 'number', placeholder: 'Office #' },
    { name: 'phoneNum', type: 'text', placeholder: 'Phone #' },
  ]

  const onSubmit = function (values) {
    const index = state.employeeList.findIndex(e => e.name === values.name)
    if (index === -1) return
    state.employeeList[index] = values
    setState('employeeList', state.employeeList)
    const item = Employee(values)
    document.querySelector(`#item-${values.name}`).replaceWith(item)
  }
  form.addEventListener('submit', handleSubmit(onSubmit))

  fields.map(field => {
    form.append(Field(field))
  })

  form.append(Button())

  return form
}
