import { Link } from "gatsby"
import React from "react"

const GreetingBanner = () => (
    <section className="greeting-banner"><a href="#greeting"></a>
        <div className="d-flex h-100">
            <div className="container justify-content-center align-self-center text-right">
                <h1>Hi, my name is <span className="highlight">Rachel</span>!<br />
                    I build interactive <span className="highlight">websites</span> and <span className="highlight">software</span>.</h1>
            </div>
        </div>
    </section>
)

export default GreetingBanner