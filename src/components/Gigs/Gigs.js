import React from 'react';
import { GigsStyled } from './Gigs.styled';
import Gig from './Gig/Gig';
import { gigs } from './gigData';

const upcomingGigs = gigs.filter(gig => {
  const gigDate = new Date(gig.year, gig.month - 1, gig.day);
  return gigDate > new Date();
}).sort((a, b) => {
  const dateA = new Date(a.year, a.month - 1, a.day);
  const dateB = new Date(b.year, b.month - 1, b.day);
  return dateA - dateB;
});

const pastGigs = gigs.filter(gig => {
  const gigDate = new Date(gig.year, gig.month - 1, gig.day);
  return gigDate <= new Date();
}).sort((a, b) => {
  const dateA = new Date(a.year, a.month - 1, a.day);
  const dateB = new Date(b.year, b.month - 1, b.day);
  return dateA - dateB;
});

function Gigs() {

  return (
    <GigsStyled id="Gigs">
      <h2>Gigs</h2>
      <h3>Upcoming:</h3>
      <ul>
        {upcomingGigs.map((gig, index) => (
          <div>
            <Gig 
              key={gig.venue + gig.day + gig.month + gig.year + gig.description} 
              venue={gig.venue} 
              day={gig.day} 
              month={gig.month}
              year={gig.year}
              description={gig.description} 
              address={gig.address} 
              time={gig.time} 
              link={gig.link} 
              image={gig.image}
              cost={gig.cost}
              past={false}
              />
              {index < upcomingGigs.length - 1 ? <hr /> : null}
          </div>
        ))}
      </ul>
      <h3>Past:</h3>
      <ul>
        {pastGigs.map((gig, index) => (
          <div>
            <Gig 
              key={gig.venue + gig.day + gig.month + gig.year + gig.description} 
              venue={gig.venue} 
              day={gig.day} 
              month={gig.month}
              year={gig.year}
              description={gig.description} 
              address={gig.address} 
              time={gig.time} 
              cost={gig.cost}
              past={true}
              />
              {index < pastGigs.length - 1 ? <hr /> : null}
            </div>
        ))}
      </ul>
    </GigsStyled>
  )
}

export default Gigs;