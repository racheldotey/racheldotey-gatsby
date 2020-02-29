import { Link } from "gatsby"
import React from "react"

const IntroductionBanner = () => (
    <section class="full-banner introduction-banner" id="hero">
        <div class="container">
            <h3>I am a full stack software developer with experience making 
                interative web experiences.</h3>
            <h3>I am interested in helping small businesses gain visibility on the internet. 
                Create strong brands and stay competitive in the market.
            </h3>
            <Link to="#contact">Lets Talk</Link>
        </div>
    </section>
)

export default IntroductionBanner