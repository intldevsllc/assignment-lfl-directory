const VerifyForm = function () {
  const form = create('form', 'form')

  const fields = [{ name: 'name', type: 'text', placeholder: 'Name' }]

  const onSubmit = function (values) {
    if (state.employeeList.find(employee => employee.name === values.name)) {
      $('.verify-status').text('yes')
    } else {
      $('.verify-status').text('no')
    }
  }
  form.addEventListener('submit', handleSubmit(onSubmit))

  fields.map(field => {
    form.append(Field(field))
  })

  form.append(Button())

  return form
}
