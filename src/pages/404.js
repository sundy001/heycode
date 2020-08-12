import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: 找不到你要的頁面" />
      <h1>找不到你要的頁面</h1>
      <p>你輸入的網頁路徑並不存在</p>
    </Layout>
  )
}

export default NotFoundPage
