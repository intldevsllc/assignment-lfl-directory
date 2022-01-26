const Content = function () {
  const content = create('div', 'content')
  const { search } = window.location

  if (search.includes('page=add')) {
  } else if (search.includes('page=verify')) {
  } else if (search.includes('page=update')) {
  } else if (search.includes('page=delete')) {
  } else {
  }

  return content
}

const App = function () {
  const app = create('div', 'app')
  const sidebar = Sidebar()
  const content = Content()

  app.append(sidebar)
  app.append(content)

  return app
}

const app = App()
$('body').append(app)
