const EmployeeList = function () {
  const employees = create('div', 'employee-list')

  state.employeeList.forEach(employee => {
    const item = Employee(employee)
    employees.append(item)
  })

  return employees
}

const Employee = function (employee) {
  const item = create('div', 'employee-item')
  const title = create('p')
  const line1 = create('p')
  const line2 = create('p')
  item.append(title)
  item.append(line1)
  item.append(line2)

  item.id = `item-${employee.name}`
  title.innerText = employee.name
  line1.innerText = employee.officeNum
  line2.innerText = employee.phoneNum

  return item
}
