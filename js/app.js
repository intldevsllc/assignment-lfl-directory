const App = function () {
  const app = create('div', 'app')
  const sidebar = Sidebar()
  app.append(sidebar)

  return app
}

const app = App()
$('body').append(app)
