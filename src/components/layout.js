/** @jsx jsx */
import { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { css, jsx } from "@emotion/core"

import HomeBanner from "./home-banner"
import { container } from "../styles/layout"
import { clearImageLink } from "../styles/utils"
import { rhythm } from "../styles/variable"

const socialIconStyle = css`
  width: ${rhythm(1.5)};
`

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      banner: file(absolutePath: { regex: "/banner.png/" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`

  let header
  if (location.pathname === rootPath) {
    header = <HomeBanner bannerSrc={data.banner.childImageSharp.fluid.src} />
  } else {
    header = (
      <h3
        css={css`
          fontfamily: Montserrat, sans-serif;
          margintop: 0;
        `}
      >
        <Link
          css={css`
            boxshadow: none;
            color: inherit;
          `}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Fragment>
      <header>{header}</header>
      <div css={container}>
        <main>{children}</main>
        <footer
          css={css`
            margin-top: ${rhythm(1)};
            text-align: right;
          `}
        >
          <a
            css={clearImageLink}
            href={`https://www.facebook.com/heycode001`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              css={socialIconStyle}
              src="/facebook.svg"
              alt="HeyCode - 前端阿希臉書專頁"
            />
          </a>
          &nbsp;&nbsp;
          <a
            css={clearImageLink}
            href={`https://twitter.com/sundy0011`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              css={socialIconStyle}
              src="/twitter.svg"
              alt="HeyCode - 前端阿希 Twitter"
            />
          </a>
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
