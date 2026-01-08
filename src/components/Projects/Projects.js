import React from 'react';
import { ProjectsStyled } from './Projects.styled';

function Projects() {
  return (
    <ProjectsStyled id="Projects">
      <h2>Projects</h2>
      <div>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        {/* <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-jest-plain colored"></i> */}
        <i className="devicon-nodejs-plain-wordmark colored"></i>
        <i className="devicon-express-original-wordmark"></i>
        <i className="devicon-mongodb-plain-wordmark colored"></i>
        <i className="devicon-firebase-plain-wordmark colored"></i>
        <i className="devicon-sass-original colored"></i>
        <img src="./images/styled-components.png" alt="styled-components icon" />
        <i className="devicon-git-plain colored"></i>
        {/* <i className="devicon-webpack-plain-wordmark colored"></i> */}

        <i className="devicon-python-plain-wordmark colored"></i>
      </div>
    </ProjectsStyled>
  )
}

export default Projects;