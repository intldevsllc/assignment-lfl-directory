const Verify = function () {
  const page = create('div', 'verify')
  const form = VerifyForm()
  const verifyStatus = create('p', 'verify-status')

  page.append(form)
  page.append(verifyStatus)

  return page
}
