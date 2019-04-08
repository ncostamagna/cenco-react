import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
                <Link to="/products" className="nav-item nav-link" >Products</Link>
                <Link to="/users" className="nav-item nav-link" >User</Link>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
