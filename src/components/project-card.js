import React from "react"
import MediaQueries from "../utils/mediaQueries"
import styled from "styled-components"
import colors from "../globals/colors"
import { Link  } from "gatsby"


const ProjectCardContainer = styled.div`
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

const ProjectCardFooter = styled.div`
background-color:  ${colors.baseColor};
height: 100px;
width: 100%;
padding: 30px;
display: flex;
align-items: center;
`

const ProjectCardTitle = styled.h3`
margin-bottom: 0px;
`
const ProjectCard = ({ post }) => (
  <ProjectCardContainer>
    <ProjectCardFooter>
      <Link
        to={post.fields.slug}>
        <ProjectCardTitle>{post.frontmatter.title}</ProjectCardTitle>
      </Link>
    </ProjectCardFooter>
  </ProjectCardContainer>
)
export default ProjectCard