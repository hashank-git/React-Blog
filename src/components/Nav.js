import React from 'react'
import { Route, Link } from "react-router-dom";

function Nav() {
    return (
        <div>
         <nav className="main-nav overlay clearfix">
          <Link className="blog-logo" to="index.html"><img src="assets/img/logo.png" alt="Fashion Critiques"/></Link>
          <ul id="menu">
            <li className="nav-home nav-current" role="presentation"><Link to="/">Home</Link></li>
            <li className="nav-article-example" role="presentation"><Link to="/about">About</Link></li>
            <li className="nav-about-us" role="presentation"><Link to="/author">Author</Link></li>
            <li className="nav-author-page" role="presentation"><Link to="author.html">Author Page</Link></li>
            <span className="socialheader">
            <Link to="#"><span class='symbol'>circletwitterbird</span></Link>
            <Link to="#"><span class='symbol'>circlefacebook</span></Link>
            <Link to="#"><span class='symbol'>circlegoogleplus</span></Link>
            <Link to="mailto:wowthemesnet@gmail.com"><span class='symbol'>circleemail</span></Link>
            </span>
          </ul>
          </nav>
        </div>
    )
}

export default Nav
