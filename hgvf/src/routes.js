import About from './components/About'
import Home from './components/Home'
import Contact from './components/__Contact'
import Project from './components/Project'
import Hanalei from './components/Hanalei'

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
  },
  {
    path: "/hanalei",
    content: Hanalei
  },
  {
    path: "/project",
    content: Project
  },

]

export default routes