import styled from 'styled-components';
import { mediaQueries } from '../../../partials';

const { verySmallPhoneQuery } = mediaQueries;

export const ProjectStyled = styled.li`

  display: flex;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top;

    ${verySmallPhoneQuery(`
      width: 200px;
      height: 150px;
    `)}
  }

  div {
        margin: 0 0 0 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

    h4 {
        font-weight: 600;
        font-size: 2.4rem;
        text-align: left;

        span {
            font-size: 1.8rem;
            font-weight: 400;
            margin-left: 10px;
        }

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
        text-align: left;
        margin-top: 20px;
        max-width: 800px;

        ${verySmallPhoneQuery(`
        font-size: 1.6rem;
        `)}
        span {
            display: block;
            margin-top: 3px;
        }
        .release-date {
            font-style: italic;
            margin-top: 10px;
        }
     }
  }

  
`;