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
      <h3>Recurring:</h3>
      <ul>
        <Gig
          key="weeklyWednesday"
          venue="Queensview Steakhouse"
          recurringMessage="Every Wednesday"
          description="Solo Piano.  Text me or message me (below) to make sure I'm playing that week!"
          address="435 Shoreline Village Drive, Long Beach, CA 90802"
          time="5:30 - 8:30 PM"
          link="https://www.parkerslighthouse.com"
          cost="Free (with purchase of food or drink)"
        />
        <Gig
          key="weeklyFriday"
          venue="Queensview Steakhouse"
          recurringMessage="Every Friday"
          description="w/ Apropos a'GoGo Trio (Ryan Rost, bass; Peter Buck, drums).  Text me or message me (below) to make sure I'm playing that week!"
          address="435 Shoreline Village Drive, Long Beach, CA 90802"
          time="5:30 - 9:30 PM"
          link="https://www.parkerslighthouse.com"
          cost="Free (with purchase of food or drink)"
        />
      </ul>
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