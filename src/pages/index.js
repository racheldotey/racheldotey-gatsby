import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IntroductionBanner from "../components/introduction-banner/introduction-banner"
import ServicesBanner from "../components/services-banner/services-banner"
import ProjectsBanner from "../components/projects-banner/projects-banner"
import ContactBanner from "../components/contact-banner/contact-banner"

import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroductionBanner />
    <ServicesBanner/>
    <ProjectsBanner/>
    <ContactBanner/>
  </Layout>
)

export default IndexPage
