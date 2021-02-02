import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {file:{childImageSharp:{ fluid }}} = useStaticQuery(query);

  return (
      <header className="hero">
          <div className="section-center hero-center">
              <article className="hero-info">
                  <div>
                      <div className="underline"></div>
                      <h1>José Manuel.</h1>
                      <h2>Basically a pretty good autodidact.</h2>
                      <h3>I´m an architect specializing in building (and occasionally deigning) exceptional websites, applications, and everything in between</h3>
                      <Link to='/contact' className="btn">
                          Get in touch
                      </Link>
                      <SocialLinks />
                  </div>
              </article>
              <Image fluid={fluid} className="hero-img" />
          </div>
      </header>
  )
}

export default Hero
