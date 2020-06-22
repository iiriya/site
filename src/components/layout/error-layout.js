import React, { Component } from "react"
import Layout from "./layout"
import Hero from "../ui/hero"

export default class ErrorLayout extends Component {
  render() {
    return (
      <Layout location={this.props.location} title={this.props.title}>
        <Hero title={this.props.code} subtitle={this.props.title} />
      </Layout>
    )
  }
}