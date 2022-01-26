const routes = [
  { title: 'VIEW', href: '/index.html' },
  { title: 'ADD', href: '?page=add' },
  { title: 'VERIFY', href: '?page=verify' },
  { title: 'UPDATE', href: '?page=update' },
  { title: 'DELETE', href: '?page=delete' },
]

const Icon = function () {
  const icon = create('img', 'icon')
  icon.src = '/images/address-book.svg'
  return icon
}

const NavLink = function ({ href, title }) {
  const link = create('a', 'navlink')

  if (window.location.search.includes(href)) {
    link.classList.add('active')
  }

  link.href = href
  link.innerHTML = title

  return link
}

const Sidebar = function () {
  const sidebar = create('div', 'sidebar')

  sidebar.append(Icon())

  routes.forEach(link => {
    sidebar.append(NavLink(link))
  })

  return sidebar
}
