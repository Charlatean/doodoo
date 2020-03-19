import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FifthPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the fifth page</h1>
    <p>Welcome to page 5, I bet you're wondering where the other pages are</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FifthPage
