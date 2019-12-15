import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cum,
              eum corrupti aspernatur, enim quibusdam, ut asperiores
              reprehenderit tempora magnam amet molestias laborum molestiae
              quam? Eius provident corrupti quam ut, quis aliquam consequatur
              assumenda est facere dolor quasi porro adipisci commodi distinctio
              veniam quisquam ullam ratione, incidunt neque, nemo explicabo.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Info
