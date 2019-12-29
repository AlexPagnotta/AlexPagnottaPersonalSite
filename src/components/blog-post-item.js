import React from "react"
import MediaQueries from "../utils/mediaQueries"
import Img from "gatsby-image"
import styled from "styled-components"
import colors from "../globals/colors"
import { Link  } from "gatsby"

const BlogPostItemContainer = styled.div`
height: 300px;
width: 250px;
margin: 0px 30px 0px 30px;
`

const PostText = styled.p`
margin-bottom: 0px;
font-size: 0.9rem;
line-height: 1.1;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
`

const BlogPostItem = ({ post }) => (
  <BlogPostItemContainer>
    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />   
      <Link
        to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      <PostText>{post.internal.content}</PostText>      
  </BlogPostItemContainer>
)
export default BlogPostItem