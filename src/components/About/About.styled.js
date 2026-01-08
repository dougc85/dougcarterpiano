import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { aboutQuery, aboutNarrowQuery } = mediaQueries;

export const AboutStyled = styled.section`

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 4rem auto;

  ${aboutQuery(`
    margin: 1rem auto;
  `)}

${aboutNarrowQuery(`
    flex-direction: column;
  `)}

  img {
    height: 350px;
    border-radius: 20px;
    object-fit: cover;
    object-position: top;

    ${aboutQuery(`
      height: 250px;
    `)}

    ${aboutNarrowQuery(`
      margin-bottom: 2rem;
    `)}
  }

  >div {
    margin-left: 4rem;

    ${aboutNarrowQuery(`
      margin-left: 0;
    `)}

    h2 {
      font-size: 3rem;
      margin-bottom: 3rem;

      ${aboutQuery(`
        font-size: 2.5rem;
        margin-bottom: 2rem;
      `)}
    }
    p {
      font-size: 1.8rem;
      max-width: 700px;

      ${aboutQuery(`
        font-size: 1.6rem;
        margin-bottom: 2rem;
      `)}

      >span {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`

export const Links = styled.div`
  text-align: end;
  margin-top: 2rem;

  a {
    margin-left: 1rem;
    :visited, :active, :link {
      text-decoration: none;
    }
    i {
      font-size: 4.2rem;
    }
  }
`