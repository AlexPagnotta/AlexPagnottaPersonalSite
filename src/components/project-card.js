import React from "react"
import MediaQueries from "../utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"
import Img from "gatsby-image"


const ProjectCardContainer = styled.div`
background-color:  ${colors.primaryColor};
height: 300px;
width: 250px;
margin: 0px 30px 0px 30px;
flex-shrink: 0;
display: flex;
flex-direction: column;
overflow: hidden;

/* this fixes the overflow:hidden in Chrome */
-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
`

const ProjectCardFooter = styled.div`
background-color:  ${colors.baseColor};
height: 100px;
width: 100%;
padding: 20px 20px 20px 20px;
display: flex;
align-items: center;
`

const CardTitle = styled.h3`
margin-bottom: 0px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
`

const ProjectCard = ({ post }) => (
  <a href={post.frontmatter.projecturl}>
  <ProjectCardContainer>
    <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} /> 
    <ProjectCardFooter>
    <CardTitle>
      {post.frontmatter.title}  
    </CardTitle>
    </ProjectCardFooter>
  </ProjectCardContainer>
  </a>
)
export default ProjectCard