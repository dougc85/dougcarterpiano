import React from 'react';
import { ProjectStyled, Links } from './Project.styled';

function Project(props) {

  const { image, name, artist, description, link, albumTag, releaseDate } = props;

  return (
    <ProjectStyled key={name}>
        {
        albumTag ? 
            albumTag : 
            link ? 
            <a href={link} target="_blank" rel="noreferrer noopener"><img src={image} alt={name} /></a> :
              <img src={image} alt={name} />  
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
      </div>
      
      
      
    </ProjectStyled>
  )
}

export default Project;