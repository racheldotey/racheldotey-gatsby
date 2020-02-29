import { Link } from "gatsby"
import React from "react"

const CallOutBanner = () => (
    <section class="full-banner callout-banner">
      <div class="container">
        <h2>Contact</h2>
        <div>
          <p>Would you like to work with me? Awesome!</p>
          <Link to="/contact/">Let's Talk</Link>
        </div>
      </div>
    </section>
)

export default CallOutBanner
