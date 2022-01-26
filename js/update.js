const Update = function () {
  const page = create('div', 'update')
  const form = UpdateForm()
  const employees = EmployeeList()

  page.append(form)
  page.append(employees)

  return page
}
