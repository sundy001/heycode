import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { mediumScreen, rhythm } from "../styles/variable"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO title="HeyCode - 前端阿希" />
      <Bio
        isHeader
        style={css`
          margin-top: ${rhythm(-7)};

          @media (${mediumScreen}) {
            margin-top: ${rhythm(-2)};
          }
        `}
      />
      {posts.map(({ node }) => {
        const { title, description, bannerImage, date } = node.frontmatter
        return (
          <Card
            key={node.fields.slug}
            title={title}
            description={description}
            bannerImage={bannerImage.childImageSharp.fluid}
            date={date}
            slug={node.fields.slug}
            style={css`
              width: 100vw;
              margin-left: calc((100vw - 100%) * -0.5);

              @media (${mediumScreen}) {
                width: 100%;
                margin-left: 0;
              }
            `}
          />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            title
            description
            tags
            bannerImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
