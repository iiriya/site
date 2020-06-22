import React from "react"
import Nav from "../nav"
import Footer from "../footer"
import { SEO } from "@pittica/gatsby-plugin-seo"

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <>
        <SEO title={title} path={location.pathname} />
        <Nav title={title} root={location.pathname === `${__PATH_PREFIX__}/`} />
        <main>
          <div className="inner-page">
            {children}
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
