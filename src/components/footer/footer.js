import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './footer.scss'

const Footer = ({ siteTitle }) => (
  <footer class="footer">
    <div class="container">
      <p>
        © {new Date().getFullYear()}, Built with
    {` `}
        <a href="https://www.nodejs.org">Node</a> and <a href="https://www.gatsbyjs.org">Gatsby</a></p>
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
