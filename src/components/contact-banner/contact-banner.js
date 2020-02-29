import { Link } from "gatsby"
import React from "react"

import './contact-banner.scss'

const ContactBanner = () => (
    <section class="contact-banner" id="hero">
        <div class="container">
            <h1><span class="highlight">ContactBanner</span>!</h1>
            <Link to="#contact">Lets Talk</Link>
        </div>
    </section>
)

export default ContactBanner