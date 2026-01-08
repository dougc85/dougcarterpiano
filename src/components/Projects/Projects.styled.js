import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { projectsQuery, projectsNarrowQuery, verySmallPhoneQuery } = mediaQueries;

export const ProjectsStyled = styled.section`
  background-color: white;
  padding: 3rem;

  ${verySmallPhoneQuery(`
    padding: 3rem 1.5rem;
  `)}

  h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 5rem;

    ${verySmallPhoneQuery(`
      font-size: 3rem;
      margin-bottom: 4rem;
    `)}
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 3.5rem;
    max-width: 1400px;

    ${projectsQuery(`
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 5rem;
    `)}

    ${projectsNarrowQuery(`
      grid-template-columns: 1fr;
    `)}
  }
`