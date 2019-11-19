import React from "react"
import MediaQueries from "../Utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"


const BlogPostsCardContainer = styled.div`
background-color:  ${colors.primaryColor};
height: 350px;
width: 280px;
margin: 30px;
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
padding: 30px;
display: flex;
align-items: center;
`

const BlogPostCard = ({ post }) => (
  <BlogPostsCardContainer>
    <BlogPostCardFooter>
      <h2>{post.frontmatter.title}</h2>
    </BlogPostCardFooter>
  </BlogPostsCardContainer>
)
export default BlogPostCard