import React from "react"
import MediaQueries from "../utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"
import { Link  } from "gatsby"

const BlogPostsCardContainer = styled.div`
background-color:  ${colors.primaryColor};
height: 300px;
width: 250px;
margin: 0px 30px 0px 30px;
flex-shrink: 0;
display: flex;
flex-direction: column-reverse;
overflow: hidden;

/* this fixes the overflow:hidden in Chrome */
-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
`

const BlogPostCardFooter = styled.div`
background-color:  ${colors.baseColor};
height: 150px;
width: 100%;
padding: 20px 10px 20px 10px;
text-align: center;
`

const CardTitle = styled.h4`
margin-bottom: 20px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
`

const CardText = styled.p`
margin-bottom: 0px;
font-size: 0.9rem;
line-height: 1.1;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
`

const BlogPostCard = ({ post }) => (
  <BlogPostsCardContainer>
    <BlogPostCardFooter>
      <Link
        to={post.fields.slug}>
        <CardTitle>{post.frontmatter.title}</CardTitle>
      </Link>
      <CardText>{post.internal.content}</CardText>      
    </BlogPostCardFooter>
  </BlogPostsCardContainer>
)
export default BlogPostCard