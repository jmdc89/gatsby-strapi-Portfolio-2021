import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
import SEO from '../components/SEO'

export default ({data}) => {

  const {
    allStrapiProjects:{nodes:projects},
    allStrapiBlogs:{nodes:blogs}
  } = data

  return (
  <Layout>
      <SEO title="Home" description="this is ou home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured projects"
      showLink/>
      {/* <Blogs blogs={blogs} title="Latest Articles" showLink /> */}
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

  }
`
