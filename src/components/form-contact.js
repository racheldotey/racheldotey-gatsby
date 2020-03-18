import { Link } from "gatsby"
import React from "react"
import { Form, Button } from "react-bootstrap"

const ContactForm = () => (
    <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="sugar">

        <input type="hidden" name="sugar" />
        <input type="hidden" name="form-name" value="contact" />
        
        <p className="h2 text-center">Contact Me</p>

        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" placeholder="Enter your Name" />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Your best email" />
            <small id="weNeverShareYourEmail" className="form-text text-muted">
                We'll never share your email with anyone else.
            </small>
        </div>
        
        <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone number" />
        </div>
        
        <div className="form-group">
            <label htmlFor="message">How can I help?</label>
            <textarea id="message" name="message" rows="3" className="form-control" placeholder="What can I do for you?"></textarea>
        </div>

        <div className="text-right">
            <button type="submit" className="btn-lg button button-light">
                Send Message
            </button>
        </div>
    </form>
)

export default ContactForm