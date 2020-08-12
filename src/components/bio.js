import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

import { rhythm, mediumScreen } from "../styles/variable"

const Bio = ({ isHeader, style }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 132, height: 132) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const size = `${isHeader ? 132 : 50}px`
  return (
    <div
      css={css`
        ${style}
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: ${rhythm(1)};

        @media (${mediumScreen}) {
          flex-direction: row;
          align-items: flex-start;
        }
      `}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        css={css`
          margin-right: ${rhythm(0.5)};
          margin-bottom: ${rhythm(0.5)};
          min-width: ${size};
          height: ${size};
          border-radius: 100%;
          border: 3px solid #fff;
        `}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p
          css={css`
            margin-bottom: ${rhythm(0.5)};
          `}
        >
          {author.summary}
        </p>
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fheycode001&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=470131336417058"
          height="35"
          css={css`
            border: none;
            overflow: hidden;
            margin-bottom: 0;
          `}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          importance="low"
          loading="lazy"
          title="按讚 HeyCode - 前端阿希"
        ></iframe>
      </div>
    </div>
  )
}

export default Bio
