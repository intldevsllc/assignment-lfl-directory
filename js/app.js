const Content = function () {
  const content = create('div', 'content')
  const { search } = window.location

  if (search.includes('page=add')) {
    content.append(Add())
  } else if (search.includes('page=verify')) {
    content.append(Verify())
  } else if (search.includes('page=update')) {
    content.append(Update())
  } else if (search.includes('page=delete')) {
  } else {
    content.append(Index())
  }

  return content
}

const App = function () {
  const app = create('div', 'app')
  const sidebar = Sidebar()
  const content = Content()

  if (!state.employeeList || state.employeeList === employeeList) {
    setState('employeeList', employeeList)
  }

  app.append(sidebar)
  app.append(content)

  return app
}

const app = App()
$('body').append(app)
