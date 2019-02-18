import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const routes = [
  {
    path: "/",
    exact: true,
    content: Home
  },
  {
    path: "/About",
    content: About
  },
  {
    path: "/Contact",
    content: Contact
  }
]

export default routes