import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './footer.scss'

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <div class="container">
      <p>© 2012-{new Date().getFullYear()} <Link to="#contact">Contact</Link><a href="https://www.racheldotey.com/about/contact">Rachel Dotey</a> All Rights Reserved. | <a href="/policies/">Website Policies</a></p>
    </div>
    <div class="container">
      <p>This website built with <a href="https://www.nodejs.org">Node</a>, React and <a href="https://www.gatsbyjs.org">Gatsby</a> on Netifly.com.</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
