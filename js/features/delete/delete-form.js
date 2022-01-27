const DeleteForm = function () {
  const form = create('form', 'form')

  const fields = [{ name: 'name', type: 'text', placeholder: 'Name' }]

  const onSubmit = function (values) {
    const index = state.employeeList.findIndex(
      employee => employee.name === values.name
    )

    if (index !== -1) {
      state.employeeList.splice(index, 1)
      setState('employeeList', state.employeeList)
      $('.delete-status').text('Deleted successfully')
    } else {
      $('.delete-status').text('Failed to delete')
    }
  }
  form.addEventListener('submit', handleSubmit(onSubmit))

  fields.map(field => {
    form.append(Field(field))
  })

  form.append(Button())

  return form
}
