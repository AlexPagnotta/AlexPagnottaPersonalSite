import React from "react"
import NavbarBlog from "../components/navbar-blog"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../globals/colors"
import MediaQueries from "../utils/mediaQueries"
import BlogPostItem from "../components/blog-post-item";
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";

const BlogContainer = styled.div`
padding-top: 140px;
width: 100%;
max-width: 1220px;
margin: 0 auto; //Center the container

${MediaQueries.queries.tablet`
padding-top: 100px; 
`}
`

const PostsContainer = styled.div`
width: 100%;
margin-top: 90px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 90px 60px;
padding: 30px;

@media (max-width: 1140px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 700px) {
  grid-template-columns: repeat(1, 1fr);
}
`


function Blog() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "blog"}}}) {
          edges {
            node {
              id,
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY", locale: "it")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }     
                }             
              }
              internal {
                content
              }
              fields {
                slug
              }
            }
          }
        }
  }
`)
const Posts = data.allMarkdownRemark.edges
.map(edge => <BlogPostItem key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Pagnotta Blog</title>
        <link rel="canonical" href="http://alexpagnotta.me/blog" />
      </Helmet> 
      <NavbarBlog ></NavbarBlog>
      <BlogContainer>
        <PostsContainer>
          {Posts}
        </PostsContainer>
      </BlogContainer>
    </Layout> 
  )
}
export default Blog
