import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import Typewriter from "typewriter-effect";
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
}`

const Hero = () => {
  const {file:{childImageSharp:{ fluid }}} = useStaticQuery(query);

  return (
      <header className="hero">
          <div className="section-center hero-center">
              <article className="hero-info">
                  <div>
                      <div className="underline"></div>
                      <h1>José M.D.C.</h1>
                      <h2 className="typewriter-style"><Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Arquitect.")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Researcher.")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Computational Designer.")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Autodidact.")
                            .pauseFor(750)
                            .deleteAll()
                            .typeString("Developer.")
                            .start();       
                        }}
                      /></h2>
                      <h3>Designing and building exceptional websites, applications, parametric models, complex geometry and everything in between.</h3>
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
