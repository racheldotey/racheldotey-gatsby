import { Link } from "gatsby"
import React from "react"

import './services-banner.scss'

const ServicesBanner = () => (
    <section class="services-banner" id="hero">
        <div class="container">
            <h1><span class="highlight">ServicesBanner</span>!</h1>
            <Link to="#contact">Lets Talk</Link>
        </div>
    </section>
)

export default ServicesBanner