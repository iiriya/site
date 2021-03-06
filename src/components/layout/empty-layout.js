import React, { Component } from "react"
import Layout from "./layout"
import Hero from "../ui/hero"
import Section from "../ui/section"

export default class EmptyLayout extends Component {
  render() {
    const { location, title, value } = this.props

    return (
      <Layout location={location} title={`${title} "${value}"`}>
        <Hero title={title} subtitle={value} />
        <Section>
          Nessun Post Trovato
        </Section>
      </Layout>
    )
  }
}
