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
      <div>
        <h4>{name} <span>{artist}</span></h4>
        <p>
        <span>
            {description}
        </span>
        <span className='release-date'>
            {releaseDate}
        </span>
        </p>
        <Links>
            <a href={link} target="_blank" rel="noreferrer noopener">link</a>
        </Links>
      </div>
      
      
      
    </ProjectStyled>
  )
}

export default Project;