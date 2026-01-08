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
          <Project key={project.name} albumTag={project.albumTag} image={project.image} name={project.name} description={project.description} link={project.link} artist={project.artist} releaseDate={project.releaseDate}/>
        ))}
      </ul>
    </ProjectsStyled>
  )
}

export default Projects;