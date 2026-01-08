import styled from 'styled-components';
import { mediaQueries } from '../../../partials';

const { verySmallPhoneQuery } = mediaQueries;

export const ProjectStyled = styled.li`

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 250px;
    height: 180px;
    object-fit: cover;
    object-position: top;

    ${verySmallPhoneQuery(`
      width: 200px;
      height: 150px;
    `)}
  }

  h3 {
    font-weight: 600;
    font-size: 2.4rem;
    margin-top: 1.5rem;

    ${verySmallPhoneQuery(`
      font-size: 2rem;
    `)}
  }

  p {
    width: 280px;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 10px;

    ${verySmallPhoneQuery(`
      font-size: 1.6rem;
    `)}
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-top: 10px;
  a {
    font-size: 1.6rem;
    display: block;
    :visited, :active, :link {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`