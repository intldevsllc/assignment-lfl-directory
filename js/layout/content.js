const Content = function () {
  const content = create("div", "content");
  const { search } = window.location;

  if (search.includes("page=add")) {
    content.append(Add());
  } else if (search.includes("page=verify")) {
    content.append(Verify());
  } else if (search.includes("page=update")) {
    content.append(Update());
  } else if (search.includes("page=delete")) {
    content.append(Delete());
  } else {
    content.append(Index());
  }

  return content;
};
