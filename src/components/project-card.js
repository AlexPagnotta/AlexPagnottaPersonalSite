import React from "react"
const ProjectCard = ({ post }) => (
  <div>
    <h1 /*to={post.frontmatter.path}*/>
      {post.frontmatter.title} ({post.frontmatter.date})
    </h1>
  </div>
)
export default ProjectCard