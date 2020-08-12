/** @jsx jsx */
import { Link } from "gatsby"
import Img from "gatsby-image"
import { css, jsx } from "@emotion/core"

import { rhythm } from "../styles/variable"

const Card = ({ title, description, bannerImage, date, slug, style }) => {
  return (
    <article
      css={css`
        ${style}
        position: relative;
      `}
    >
      <Link
        css={css`
          box-shadow: none;
          color: white;
        `}
        to={slug}
      >
        <Img
          css={css`
            min-height: ${rhythm(9)};
          `}
          fluid={bannerImage}
          alt={title}
        />
        <div
          css={css`
            padding: ${rhythm(1 / 2)};
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0) 100%
            );
          `}
        >
          <header>
            <h3
              css={css`
                margin: 0 0 ${rhythm(1 / 4)};
              `}
            >
              {title}
            </h3>
          </header>
          <section
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <p
              css={css`
                height: ${28}px;
                max-height: ${28}px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                margin: 0;
              `}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
            <time
              css={css`
                white-space: nowrap;
                flex-shrink: 0;
                margin-left: ${rhythm(0.25)};
              `}
              dateTime={date}
            >
              {date}
            </time>
          </section>
        </div>
      </Link>
    </article>
  )
}

export default Card
