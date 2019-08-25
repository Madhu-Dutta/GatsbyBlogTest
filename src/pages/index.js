import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from '../components/Post'
import {Row, Col} from 'reactstrap'
import { graphql , StaticQuery} from "gatsby"
import Sidebar from '../components/Sidebar'

const IndexPage = () => (
<Layout pageTitle = "Maddy's Blog">
  <SEO title="Home" keywords={["gatsby", "application", "react"]} />
   
    <StaticQuery query={IndexQuery} render={data => {
    return(
      <div>
        {data.allMarkdownRemark.edges.map(({node}) =>(
          <Post 
            key={node.id}
            title={node.frontmatter.title} 
            author = {node.frontmatter.author}
            slug = {node.fields.slug}
            date = {node.frontmatter.date}
            body = {node.excerpt}
            fluid = {node.frontmatter.image.childImageSharp.fluid}
            tags = {node.frontmatter.tags}
          />
          )
        )}
      </div>
    )
  }} />
    
  </Layout>    
)

const IndexQuery = graphql`
query MyQuery {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC} limit: 1000){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
					author
          tags
          image{
            childImageSharp{
              fluid(maxWidth: 400){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
