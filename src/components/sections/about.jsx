import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Section from "../ui/section"

const About = () => {
  const { site } = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `
  )

  return (
    <Section title={site.siteMetadata.title} subtitle={site.siteMetadata.description}>
    </Section>
  )
}

export default About
