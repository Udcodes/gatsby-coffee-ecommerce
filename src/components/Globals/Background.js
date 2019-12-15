import React from "react"
import Background from "gatsby-background-image"

export default function background({ img, styleClass, title, children }) {
  return (
    <Background className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </Background>
  )
}

Background.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
