import React, { Component } from "react"
import Footer from "../footer"
import { SEO } from "@pittica/gatsby-plugin-seo"

export default class IndexLayout extends Component {
  render() {
    const { location, title, children } = this.props

    return (
      <>
        <SEO title={title} path={location.pathname} />
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
