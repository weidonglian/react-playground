// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="Page three" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout >
  )
}

export default ThirdPage

export const query = graphql`
  {
    markdownRemark(excerpt: {}) {
      html
    }
  }
`