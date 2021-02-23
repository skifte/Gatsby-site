import React, { Component } from "react";
import { Link } from "gatsby";

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class SiteHeader extends Component {
  render() {
    return (
      <header className="siteheader">
        <div className="container-fluid">
          <nav className="sitenav">

          <button className="toggle-menu" id="js-toggle-menu" aria-hidden="true">
          ☰ <span className="visuallyhidden">Åpne </span>
          Meny</button>

            <div className="expandable-menu-wrapper">
              <ul className="nav">
                <ListLink to="/">Blogg</ListLink>
                <ListLink to="/om-anders/">About</ListLink>
              </ul>
              <div className="sitesearch">
                <form
                  className="form-search"
                  action=""
                  method="get"
                  role="search"
                >
                  <div className="input-append">
                    <input
                      type="search"
                      placeholder="Leter du etter noe?"
                      name="q"
                      className="search-input text"
                    />
                    <button type="submit" class="btn">
                      Søk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default SiteHeader;
