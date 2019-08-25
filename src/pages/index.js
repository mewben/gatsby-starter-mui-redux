import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import Layout from "../components/Layout"
import Image from "../components/Layout/Image"
import SEO from "../components/Layout/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Typography variant="body2">Welcome to your new Gatsby site.</Typography>
    <Button variant="contained" color="primary">
      Button
    </Button>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
