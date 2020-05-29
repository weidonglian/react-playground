// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html, frontmatter } = markdownRemark
  return (
    <Layout>
      <SEO title="Page three" />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`