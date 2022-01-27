const AddForm = function () {
  const form = create('form', 'form')

  const fields = [
    { name: 'name', type: 'text', placeholder: 'Name' },
    { name: 'officeNum', type: 'number', placeholder: 'Office #' },
    { name: 'phoneNum', type: 'text', placeholder: 'Phone #' },
  ]

  const onSubmit = function (values) {
    state.employeeList.push(values)
    setState('employeeList', state.employeeList)
    const item = Employee(values)
    $('.employee-list').append(item)
  }
  form.addEventListener('submit', handleSubmit(onSubmit))

  fields.map(field => {
    form.append(Field(field))
  })

  form.append(Button())

  return form
}
