import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/footer"

const Layout = ({ children }) => (
  <Layout>
    <Navbar />
    {children}
    <Footer />
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
