import { Link } from "gatsby"
import * as React from "react"

const GreetingBanner = () => (
    <section className="greeting-banner"><a href="#greeting"></a>
        <div className="d-flex h-100">
            <div className="container justify-content-center align-self-center text-right">
                <h1>Hi, my name is <span className="highlight">Rachel</span>!<br />
                    I build <span className="highlight">interactive</span> websites and software.</h1>
            </div>
        </div>
    </section>
)

export default GreetingBanner