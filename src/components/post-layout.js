import React from "react"
import Nav from "./nav"
import Footer from "./footer"
import { SEO } from "@pittica/gatsby-plugin-seo"

export default class PostLayout extends React.Component {
  render() {
    const { location, title, children, post, image } = this.props

    return (
      <>
        <SEO
          title={title}
          description={post.frontmatter.description || post.excerpt}
          frontmatter={post.frontmatter}
          isBlogPost={true}
          image={image}
          postData={post}
          path={location.pathname}
        />
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
