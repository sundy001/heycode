import { containerMaxWidth, rhythm } from "./variable"
import { css } from "@emotion/core"

export const container = css`
  margin: 0 auto;
  max-width: ${containerMaxWidth};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
