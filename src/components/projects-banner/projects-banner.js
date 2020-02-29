import { Link } from "gatsby"
import React from "react"

import './projects-banner.scss'

const ProjectsBanner = () => (
    <section class="projects-banner" id="hero">
        <div class="container">
            <h1><span class="highlight">ProjectsBanner</span>!</h1>
            <Link to="#contact">Lets Talk</Link>
        </div>
    </section>
)

export default ProjectsBanner