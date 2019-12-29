import React from "react"
import MediaQueries from "../utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"
import { Link  } from "gatsby"
import Img from "gatsby-image"

const BlogPostCardContainer = styled.div`

width: 300px;
padding: 30px;

& > a {
  text-decoration: none;
}
`

const ImageContainer = styled.div`
height: 150px;
overflow:hidden;
width: 100%;
`

const PostTitle = styled.h3`
font-size: 1.4rem;
margin-bottom: 20px;
margin-top: 20px;
`

const PostText = styled.p`
margin-bottom: 0px;
font-size: 0.9rem;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
`

const BlogPostCard = ({ post }) => (
  <BlogPostCardContainer> 
    <Link 
        to={post.fields.slug}>
          <ImageContainer>
            <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />        
          </ImageContainer>      
            <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostText>{post.internal.content}</PostText>      
    </Link>
  </BlogPostCardContainer> 
)

export default BlogPostCard