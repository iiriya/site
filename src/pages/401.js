import React from "react"
import ErrorLayout from "../components/layout/error-layout"

export default class UnauthorizedPage extends React.Component {
  render() {
    return (
      <ErrorLayout code="401" title="Unauthorized" location={this.props.location} />
    )
  }
}
