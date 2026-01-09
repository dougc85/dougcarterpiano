import React from 'react';
import { ProjectsStyled } from './Projects.styled';
import Project from './Project/Project';
import { projects } from './projectData';
import { upcomingProjects} from './upcomingProjectData';


function Projects() {
  return (
    <ProjectsStyled id="Projects">
      <h2>Projects</h2>
        <h3>Upcoming:</h3>
        <ul>
          {upcomingProjects.map((project, index) => (
            <div>
              <Project
                key={project.name}
                albumTag={project.albumTag}
                image={project.image}
                name={project.name}
              description={project.description} 
              link={project.link} 
              artist={project.artist} 
              releaseDate={project.releaseDate}/>
              {                
                index < upcomingProjects.length - 1 ? <hr /> : null
              }
            </div>
              
        ))}
        </ul>
        <h3>Completed:</h3>
        <ul>
          {projects.map((project, index) => (
            <div>
              <Project 
              key={project.name} 
              albumTag={project.albumTag} 
              image={project.image} 
              name={project.name} 
              description={project.description} 
              link={project.link} 
              artist={project.artist} 
              releaseDate={project.releaseDate}/>
              {
                index < projects.length - 1 ? <hr /> : null
              }
            </div>
          ))}
        </ul>
    </ProjectsStyled>
  )
}

export default Projects;