import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { verySmallPhoneQuery } = mediaQueries;

export const ProjectsStyled = styled.section`
  background-color: #1c1c1c;
  color: white;
  text-align: center;
  padding: 4rem 10rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 5rem;
  }
  h2 {
    margin-bottom: 5rem;
    font-size: 4rem;

    ${verySmallPhoneQuery(`
      font-size: 3rem;
    `)}
  }

  hr {
      border: none;
      height: 1px;
      background-color: white;
      color: white;
      margin: 0 20%;
  }

  h3 {
    margin-bottom: 3rem;
    text-align: left;
  }

  >div {
    flex: 1;
    margin: 0 auto;
    min-width: 80%;
    display: grid;
    grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
    gap: 6rem 10px;
    place-content: center;
    margin-bottom: 3rem;


    i {
      font-size: calc(30px + 5vw);;
      display: block;
    }
    img {
      height: calc(30px + 5vw);
      display: block;
      justify-self: center;
    }
  }
  
`