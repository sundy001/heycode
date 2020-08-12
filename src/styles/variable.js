import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const fontFamily =
  '"Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif'

Wordpress2016.overrideThemeStyles = () => {
  return {
    html: {
      font:
        '400 18px/1.62 "Georgia", "Xin Gothic", "Hiragino Sans GB", "Droid Sans Fallback", "Microsoft YaHei", sans-serif',
    },
    body: {
      background: `#fff`,
      overflow: `hidden`,
      fontFamily,
    },
    h1: {
      fontFamily,
    },
    h2: {
      fontFamily,
    },
    h3: {
      fontFamily,
    },
    h4: {
      fontFamily,
    },
    h5: {
      fontFamily,
    },
    h6: {
      fontFamily,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const backgroundColor = "#fff"
export const containerMaxWidth = rhythm(24)
