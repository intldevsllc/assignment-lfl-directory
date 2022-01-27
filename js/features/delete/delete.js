const Delete = function () {
  const page = create('div', 'delete')
  const form = DeleteForm()
  const verifyStatus = create('p', 'delete-status')

  page.append(form)
  page.append(verifyStatus)

  return page
}
