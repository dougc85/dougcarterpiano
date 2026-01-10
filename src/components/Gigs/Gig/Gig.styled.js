import styled from 'styled-components';
import { mediaQueries } from '../../../partials';

const { verySmallPhoneQuery, aboutQuery, aboutNarrowQuery } = mediaQueries;

export const GigStyled = styled.li`

  list-style: none;
  margin: 5rem 0;
  text-align: left;

  ${aboutNarrowQuery(`
    text-align: center;
    margin: 3rem 0;
  `)}

  img {
    width: 200px;
    object-fit: cover;
    object-position: top;

    ${verySmallPhoneQuery(`
      width: 200px;
      height: 150px;
    `)}
  }



    h4 {
        font-weight: 600;
        font-size: 2.4rem;

        span {
            font-size: 1.8rem;
            font-weight: 400;
            margin-left: 10px;
        }

        ${aboutNarrowQuery(`
          margin-bottom: 1rem;
        `)}

        ${verySmallPhoneQuery(`
        font-size: 2rem;
            span {
                font-size: 1.6rem;
            }
        `)}


     }

    p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 1.8rem;
        max-width: 800px;

        ${verySmallPhoneQuery(`
        font-size: 1.6rem;
        `)}

        &.venue {
            font-weight: 600;

            span {
              font-style: italic;
              margin-left: 10px;
              font-weight: 300;
              font-size: 90%;

              ${
                aboutQuery(`
                  display: block;
                  margin-left: 0;
                  font-size: 1em;
                  `)
              }

              ${aboutNarrowQuery(`
                margin-bottom: .5rem;
              `)}
            }
        }
     }

  a {
    font-size: 1.6rem;
    :visited, :active, :link {
      color: black;
      text-decoration: none;
      border-bottom: 1px solid black;
    }
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-top: 10px;
  
`