import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import {Badge, Card, CardBody, CardSubtitle} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunctions'
import authors from '../util/authors'
import {DiscussionEmbed} from 'disqus-react'

const SinglePost = ({data, pageContext}) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name === post.author)

    const baseUrl = "https://xenodochial-ritchie-a2ac54.netlify.com/" ;
    const disqShortname = "gatsbyblog-netlify-com";

    const disqsConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug 
    }

    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
            <SEO title={post.title}/>    
                <Card>
                    <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                    <CardBody>
                        <CardSubtitle>
                            <span className="text-info">{post.date}</span> {' '} by
                            <span className="text-info">{post.author}</span>                            
                        </CardSubtitle>
                        {/*Main html content or the description / blog content*/}
                        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
                        <ul className="post-tags">
                            {post.tags.map(tag => (
                                <li key={tag}>
                                    <Link to={`/tag/${slugify(tag)}`}>
                                        <Badge color="primary">{tag}</Badge>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card> 
                <h3 className="text-center">Share this Post</h3>
                <div className="text-center social-share-links">
                    <ul>
                        <li>
                            <a href={'https://www.facebook.com/sharer.php?u=' +
                             baseUrl +
                              pageContext.slug
                            }
                            className="facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                              >
                                <i className="fab fa-facebook-f fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href={'https://www.twitter.com/sharer.php?url=' +
                             baseUrl +
                              pageContext.slug + '&text=' + post.title + '&'
                            }
                            className="twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                              >
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href={'https://www.google.com/sharer.php?url=' +
                             baseUrl +
                              pageContext.slug 
                            }
                            className="google"
                            target="_blank"
                            rel="noopener noreferrer"
                              >
                                <i className="fab fa-google fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href={'https://www.linkedin.com/sharer.php?url=' +
                             baseUrl +
                              pageContext.slug 
                            }
                            className="linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                              >
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <DiscussionEmbed shortname={disqShortname} config={disqShortname} />    
        </Layout>
    )
}
//Not a static query. Recieve a variable. It is a dynamic query executed automatically by graphql
//$slug type is string & ! means required/manditory item
export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MMM Do YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        file(relativePath: {eq: $imageUrl}){
            childImageSharp{
                fluid(maxWidth: 300){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default SinglePost