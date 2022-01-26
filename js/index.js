const Index = function () {
  const page = create('div')
  const employees = EmployeeList()

  page.append(employees)

  return page
}
