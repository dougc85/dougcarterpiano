import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { headerQuery, smallPhoneQuery } = mediaQueries;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c1c1c;
  color: white;
  padding: 1rem 1rem 1.8rem 3.3rem;

  ${headerQuery(`
    padding: 1rem 0 1.8rem 0;
  `)}

  position: relative;

  ${headerQuery(`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    `)}

  h1 {
    font-size: 4.1rem;
    font-weight: 700;

    >span {
      text-transform: uppercase;
      padding-top: 5px;
      padding-left: 2px;
      border-top: 1px solid #5d5d5d;
      display: block;
      font-size: 1.6rem;
      margin-top: 2px;
      font-weight: 300;
    }

    ${smallPhoneQuery(`
      font-size: 3rem;

      >span {
        font-size: 1.4rem;
      }
    `)}
  }

  nav {
    flex: 1;
    margin-left: 50px;

    ${headerQuery(`
      flex: 0 1 auto;
      margin: 0;
    `)}

    >div {
      background-color: inherit;
      border: none;
      display: none;
      width: 30px;
      height: 25px;
      cursor: pointer;
      ${headerQuery(`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `)} 
      

      >div {
        border-top: 2px solid white;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      font-weight: 300;

      ${headerQuery(`
        
      `)}

      ${({ showNav }) => (headerQuery(`
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #1c1c1c;
        border-top: 1px solid gray;
        width: 40%;
        min-width: 10rem;
        display: flex;
        flex-direction: column;
        padding: 1.3rem;
        transform: translateY(100%);
        opacity: 0;
        transition: opacity .3s;
        pointer-events: none;
        cursor: default;
        

        >li:not(:last-child) {
          padding-bottom: 1.3rem;
        }
      

        ${showNav ? `
        opacity: 1;
        cursor: auto;
        pointer-events: auto;
        ` : null}
      `))}

      a {
        font-size: 2.6rem;
        :visited, :active, :link {
          color: white;
          text-decoration: none;
          ${headerQuery(`
            font-weight: 400;
            font-size: 2.5rem;
          `)}
        }

        :hover {
          color: gray;
        }
      }
    }
  }
  
`