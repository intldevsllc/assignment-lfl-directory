const Add = function () {
  const page = create('div', 'add')
  const form = AddForm()
  const employees = EmployeeList()

  page.append(form)
  page.append(employees)

  return page
}
