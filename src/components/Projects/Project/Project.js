import React from 'react';
import { ProjectStyled, Links } from './Project.styled';

function Project(props) {

  const { image, name, artist, description, link, albumTag, releaseDate } = props;
  
  return (
    <ProjectStyled key={name}>
        {
        albumTag ? 
            albumTag : 
            <a href={link} target="_blank" rel="noreferrer noopener"><img src={image} alt={name} /></a>
        }
      <h3>{name}</h3>
      <p>{artist}</p>
      <p>{description}</p>
      <p>{releaseDate}</p>
      <Links>
        <a href={link} target="_blank" rel="noreferrer noopener">link</a>
      </Links>
    </ProjectStyled>
  )
}

export default Project;