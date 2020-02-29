import { Link } from "gatsby"
import React from "react"

import './introduction-banner.scss'

const IntroductionBanner = () => (
    <section class="introduction-banner" id="hero">
        <div class="container">
            <h1>Hi, my name is <span class="highlight">Rachel</span>!<br />
                I build <span class="highlight">interactive</span> websites and software.</h1>
            <Link to="#contact">Lets Talk</Link>
        </div>
    </section>
)

export default IntroductionBanner