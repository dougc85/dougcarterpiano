import React from 'react';
import { GigsStyled } from './Gigs.styled';
import Gig from './Gig/Gig';
import { gigs } from './gigData';

function Gigs() {

  return (
    <GigsStyled id="Gigs">
      <h2>Gigs</h2>
      <ul>
        {gigs.map((gig) => (
          <Gig key={gig.name} image={gig.img} name={gig.name} description={gig.description} live={gig.live} repo={gig.repo} />
        ))}
      </ul>
    </GigsStyled>
  )
}

export default Gigs;