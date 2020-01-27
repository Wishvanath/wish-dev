import React,{Fragment} from 'react';
import './navbar.style.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Fragment>
      <header className="navigation fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand font-tertiary h3" to="/"><img className="brand_logo" src="images/logo.png" alt="Myself" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
            aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item active">
                <Link id="home_link" className="nav-link" to="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <Link id="home_link" className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link id="about_link" className="nav-link" to="/">about</Link>
              </li>
              <li className="nav-item">
                <Link id="blog_link" className="nav-link" to="/" >Blog</Link>
              </li>
              <li className="nav-item">
                <Link id="portfolio_link" className="nav-link" to="/">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link id="contact_link" className="nav-link" to="/" >Contact</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar;