import React from "react"

import Welcome from "../components/sections/welcome"
import About from "../components/sections/about"
import IndexLayout from "../components/layout/index-layout"

export default class BlogIndex extends React.Component {
  render() {
    return (
      <IndexLayout location={this.props.location}>
        <Welcome />
        <About />
      </IndexLayout>
    )
  }
}
