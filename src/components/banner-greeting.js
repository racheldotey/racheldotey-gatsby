import { Link } from "gatsby"
import React from "react"

const GreetingBanner = () => (
    <section className="greeting-banner">
        <div className="d-flex h-100">
            <div className="container justify-content-center align-self-center text-right">
                <h1>Hi, my name is <span className="highlight">Rachel</span>!<br />
                    I build <span className="highlight">interactive</span> websites and software.</h1>
                <div className=" pt-3">
                    <Link to="#contact" className="btn btn-highlight btn-lg">Lets Talk</Link>
                </div>
            </div>
        </div>
    </section>
)

export default GreetingBanner