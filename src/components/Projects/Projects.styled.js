import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { verySmallPhoneQuery, aboutQuery } = mediaQueries;

export const ProjectsStyled = styled.section`
  background-color: #1c1c1c;
  color: white;
  text-align: center;
  padding: 4rem 10rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  ${aboutQuery(`
    padding: 4rem 4rem 0 4rem;
  `)}
  

  ul {
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 4rem;
    font-size: 4rem;

    ${aboutQuery(`
      margin-bottom: 5rem;
    `)}

    ${verySmallPhoneQuery(`
      font-size: 3rem;
    `)}
  }

  hr {
      border: none;
      height: 1px;
      background-color: white;
      color: white;
      margin: 0 10%;
  }

  h3 {
    margin-bottom: 2rem;
    text-align: left;

    ${aboutQuery(`
      text-align: center;
      margin-bottom: 3rem;
    `)}
  }
`