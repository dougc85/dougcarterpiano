import styled from 'styled-components';
import { mediaQueries } from '../../partials';

const { contactQuery, smallPhoneQuery } = mediaQueries;

const backgroundColor = '#dfe5f4';

export const ContactBackground = styled.div`
  background-color: #1c1c1c;
  padding: 5rem 10rem;
  ${contactQuery(`
    padding: 4rem 6rem;
  `)}

  ${smallPhoneQuery(`
    padding: 3.5rem 4rem;
  `)}
`;

export const ContactStyled = styled.div`
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 2rem;
  padding: 2rem 5rem 3rem 5rem;
  text-align: start;
  border-radius: 20px;
  background-color: ${backgroundColor};

  ${contactQuery(`
      padding: 2rem 3.5rem 2.5rem 3.5rem;
      font-size: 1.6rem;
    `)}

  ${smallPhoneQuery(`
    border-radius: 15px;
    padding: 1.5rem 2.5rem 2rem 2.5rem;
  `)}

  >h2 {
    text-align: center;
    font-weight: 700;
    font-size: 4rem;
    color: black;
    margin: 0 auto 2rem auto;

    ${contactQuery(`
      font-size: 3rem;
    `)}

    ${smallPhoneQuery(`
      font-size: 2.4rem;
    `)}
  }

  >p {
    height: 500px;
    text-align: center;

    ${contactQuery(`
      height: 420px;
    `)}
  }
`

export const ContactForm = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;

  ${contactQuery(`
      height: 420px;
  `)}

  label {
    display: block;
    margin-left: 3px;
    margin-bottom: 5px;

    span {
      font-size: .8em;
      display: inline-block;
      margin-left: 13px;
      color: red;
    }
  }
`

export const FormElement = styled.div`

  input {
    box-sizing: border-box;
    padding: 5px;
    padding-left: 8px;
    font-size: 1.6rem;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: 1px solid #ababab;
    font-family: 'Raleway', sans-serif;

    ${smallPhoneQuery(`
      border-radius: 7px;
    `)}
  }
`

export const FormElementTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: 'Raleway', sans-serif;

  textarea {
    box-sizing: border-box;
    padding: 6px;
    font-size: 1.6rem;
    flex: 1;
    border-radius: 10px;
    border: 1px solid #ababab;
    width: 100%;

    ${smallPhoneQuery(`
      border-radius: 7px;
    `)}
  }
`

export const FormElementButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  >button {
    background-color: white;
    border: 1px solid #ababab;
    border-radius: 10px;
    padding: 12px;
    font-size: 2rem;
    position: relative;
    cursor: pointer;
    :active {
      background-color: #d8d8d8;
    }

    ${contactQuery(`
      font-size: 1.6rem;
      padding: 8px;
    `)}
  }
`