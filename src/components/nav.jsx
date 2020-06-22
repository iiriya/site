import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from "classnames"

import "../scss/ui/_nav.scss"

export default class Header extends Component {
  state = {
    isActive: false
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState(state => ({ isActive: !state.isActive }))
    return false
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={`/`} className="navbar-logo">
            <i className="icon-iiriya-icon"></i>
          </Link>
          <Link
            to={`/`}
            onClick={this.handleClick}
            role="button"
            className={classNames({
              "navbar-burger": true,
              "burger": true,
              "is-active": this.state.isActive
            })}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div
          className={classNames({
            "navbar-menu": true,
            "is-active": this.state.isActive
          })}
        >
          <div className="navbar-start">
            <Link to={`/`} className="navbar-item">
              Home
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
