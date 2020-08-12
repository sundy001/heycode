import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import { rhythm, bannerColor } from "../styles/variable"
import { clearImageLink } from "../styles/utils"
import { container } from "../styles/layout"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/HeyCode-前端阿希.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={css`
        background: ${bannerColor};
        height: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          ${container};
          padding-top: 0;
          padding-bottom: 0;
          display: flex;
          align-items: center;
        `}
      >
        <h3
          css={css`
            margin: 0;
          `}
        >
          <Link css={clearImageLink} to={`/`}>
            <Image
              fixed={data.logo.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
              css={css``}
            />
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default Header
