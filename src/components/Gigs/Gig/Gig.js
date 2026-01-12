import React from 'react';
import { GigStyled, Links } from './Gig.styled';

function getDayOfWeek(day, month, year) {
    const date = new Date(year, month - 1, day);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[date.getDay()];
  }

function Gig(props) {

  const { venue, address, day, month, year, time, link, description, cost, image, past, recurringMessage } = props;


  return (
    <GigStyled key={venue + day + month + year + description} className={past ? 'past' : 'upcoming'}>
      {image ? <a href={link} target="_blank" rel="noreferrer noopener"><img src={image} alt={`Flyer for this gig, on ${getDayOfWeek(day, month, year)}, ${month}/${day}/${year}, at ${venue}, ${address}`} /></a> : null}
      {recurringMessage ?
        <h4>{recurringMessage}</h4> :
        <h4>{`${getDayOfWeek(day, month, year)}, ${month}/${day}/${year}`}</h4>
      }
      <p className='venue'>{venue}<span className='address'>{address}</span></p>
      <p className='description'>{description}</p>
      <p className='time'>{time}</p>
      <p className='cost'>{cost}</p>
      {link ? <p className='link'><a href={link} target="_blank" rel="noreferrer noopener">More Info</a></p> : null}
    </GigStyled>
  )
}

export default Gig;