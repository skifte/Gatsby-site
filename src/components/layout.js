import React from "react"
import { Link } from "gatsby"
import SiteHeader from "../components/siteHeader"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    /* let header

   if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link to={`/`}>
            {title}
          </Link> xxxxx
        </h1>
        
      )
    } else {
      header = (
        <h3>
          <Link to={`/`}>
            {title}
          </Link> yyyy
        </h3>
      )
    }*/

    // main og aside kan defineres her om forskjellig layout på index- og visningsside



    return (
      <div>
        <SiteHeader/>
        <div className="container-fluid">
        <div className="row-fluid">
        <main className="span9">
        {children}
        </main>
        <aside className="span3">
           ASIDE
        </aside>
        </div>
        
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
