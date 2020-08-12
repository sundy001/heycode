import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { css } from "@emotion/core"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../styles/variable"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Helmet
        htmlAttributes={{
          style: "font-size: 21px;",
        }}
      />
      <article>
        <header>
          <h1
            css={css`
              margintop: ${rhythm(1)};
              marginbottom: 0;
            `}
          >
            {post.frontmatter.title}
          </h1>
          <p
            css={css`
              ${scale(-1 / 5)};
              display: block;
              marginbottom: ${rhythm(1)};
            `}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          css={css`
            marginbottom: ${rhythm(1)};
          `}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          css={css`
            display: flex;
            flexwrap: wrap;
            justifycontent: space-between;
            liststyle: none;
            padding: 0;
          `}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        description
      }
    }
  }
`
