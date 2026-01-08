import React from 'react';
import { ProjectsStyled } from './Projects.styled';
import Project from './Project/Project';
import { projects } from './projectData';

function Projects() {

  return (
    <ProjectsStyled id="Projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <Project key={project.name} image={project.img} name={project.name} description={project.description} live={project.live} repo={project.repo} />
        ))}
      </ul>
    </ProjectsStyled>
  )
}

export default Projects;