/** @jsx jsx */
import { Link } from "gatsby"
import { css, jsx } from "@emotion/core"

import { rhythm, scale, bannerColor, mediumScreen } from "../styles/variable"
import { container } from "../styles/layout"

const HomeBanner = ({ bannerSrc }) => {
  return (
    <div
      css={css`
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 100%) 0%,
            rgba(255, 255, 255, 0) ${rhythm(4)}
          ),
          bottom right / cover no-repeat url(${bannerSrc}), ${bannerColor};
        font-size: 50px;
        height: ${rhythm(12)};
        @media (min-width: 420px) {
          background-size: auto ${rhythm(12)};
        }
      `}
    >
      <div
        css={css`
          ${container};
          display: flex;
          height: 100%;
          align-items: center;
        `}
      >
        <h1
          css={css`
            display: inline;
            margin: -${rhythm(5)} ${rhythm(0.5)} 0;
            background: #fff;
            box-shadow: ${rhythm(0.5)} 0 0 0 #fff, -${rhythm(0.5)} 0 0 0 #fff;
            @media (${mediumScreen}) {
              ${scale(1.5)};
              margin-top: 0;
            }
          `}
        >
          <Link
            css={css`
              box-shadow: none;
              color: inherit;
            `}
            to={`/`}
          >
            HeyCode
            <br />
            前端阿希
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default HomeBanner
