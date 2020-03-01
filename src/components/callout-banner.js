import { Link } from "gatsby"
import React from "react"

import { Button  } from "react-bootstrap"

const CallOutBanner = () => (
    <section class="callout-banner">
      <div class="container">
        <h2>Contact</h2>
        <div>
          <p>Would you like to work with me? Awesome!</p>
          <Link className="btn" to="/contact/">Let's Talk</Link>
        </div>
      </div>
    </section>
)

export default CallOutBanner
