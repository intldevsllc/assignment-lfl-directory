const App = function () {
  const app = create("div", "app");
  const sidebar = Sidebar();
  const content = Content();

  if (!state.employeeList || state.employeeList === employeeList) {
    setState("employeeList", employeeList);
  }

  app.append(sidebar);
  app.append(content);

  return app;
};

const app = App();
$("body").append(app);
