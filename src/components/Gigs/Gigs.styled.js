import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { gigsQuery, gigsNarrowQuery, verySmallPhoneQuery, aboutQuery, aboutNarrowQuery } = mediaQueries;

export const GigsStyled = styled.section`
  background-color: white;
  text-align: center;
  padding: 4rem 10rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  ${aboutNarrowQuery(`
    padding: 3rem 4rem;
    `)}
  

  ul {
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 4rem;
    font-size: 4rem;

    ${verySmallPhoneQuery(`
      font-size: 3rem;
    `)}
  }

  h3 {
    margin-bottom: 2rem;
    text-align: left;

    ${aboutNarrowQuery(`
      text-align: center;
      margin-bottom: 1rem;
    `)}
  }

  .past {
    opacity: 0.4;
  s}

  hr {
      border: none;
      height: 1px;
      background-color: black;
      color: black;
      margin: 0 5%;
  }
`