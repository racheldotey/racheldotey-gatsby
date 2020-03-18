import { Link } from "gatsby"
import React from "react"

const ProjectsBanner = () => (
    <section className="full-banner projects-banner" id="hero">
        <div className="container">
            <h1><span className="highlight">ProjectsBanner</span>!</h1>
            <Link to="#contact" className="button button-dark">Lets Talk</Link>
        </div>
    </section>
)

export default ProjectsBanner