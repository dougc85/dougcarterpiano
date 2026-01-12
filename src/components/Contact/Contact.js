import React, { useState } from 'react';
import { ContactBackground, ContactStyled, ContactForm, FormElement, FormElementTextArea, FormElementButton } from './Contact.styled';
import useFormInput from '../../hooks/useFormInput';
import { send } from '@emailjs/browser';
import Loading from '../Loading/Loading';

function Contact() {
  const [name, handleNameChange, resetName] = useFormInput('');
  const [email, handleEmailChange, resetEmail] = useFormInput('');
  const [subject, handleSubjectChange, resetSubject] = useFormInput('');
  const [message, handleMessageChange, resetMessage] = useFormInput('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [finishedSend, setFinishedSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendFail, setSendFail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let errors = false;

    if (name.length === 0) {
      errors = true;
      setNameError('*required');
    }

    if (email.length === 0) {
      errors = true;
      setEmailError('*required')
    } else if (email.indexOf('@') === -1) {
      errors = true;
      setEmailError('*must be valid email address')
    }

    if (subject.length === 0) {
      errors = true;
      setSubjectError('*required')
    }

    if (message.length === 0) {
      errors = true;
      setMessageError('*required')
    }

    if (errors) {
      return;
    }

    setLoading(true);

    const toSend = {
      subject: subject,
      message: message,
      reply_to: email,
      from_name: name,
    }

    try {
      await send(
        'service_omhk8kk',
        'template_q2k1uhn',
        toSend,
        '3FAvkeZqWKI-934wG',
      )
      resetName();
      resetEmail();
      resetSubject();
      resetMessage();
      setFinishedSend(true);
    }
    catch (error) {
      setSendFail('There was an error sending your message. Message me on Instagram instead, and kindly let me know about this issue!');
      console.log(error);
    }

    setLoading(false);
  }

  function nameAndErrors(e) {
    if (nameError) {
      setNameError('');
    }
    handleNameChange(e);
  }

  function emailAndErrors(e) {
    if (emailError) {
      setEmailError('');
    }
    handleEmailChange(e);
  }

  function subjectAndErrors(e) {
    if (subjectError) {
      setSubjectError('');
    }
    handleSubjectChange(e);
  }

  function messageAndErrors(e) {
    if (messageError) {
      setMessageError('');
    }
    handleMessageChange(e);
  }

  return (
    <ContactBackground id="Contact">
      <ContactStyled>
        <h2>Contact Me</h2>
        {!finishedSend && <ContactForm>
          <FormElement>
            <label htmlFor="contact-name">Name
              <span>{nameError}</span>
            </label>

            <input id="contact-name" value={name} type="text" required onChange={nameAndErrors} />
          </FormElement>
          <FormElement>
            <label htmlFor="contact-email">Email
              <span>{emailError}</span>
            </label>

            <input id="contact-email" value={email} type="email" required onChange={emailAndErrors} />
          </FormElement>
          <FormElement>
            <label htmlFor="contact-subject">Subject
              <span>{subjectError}</span>
            </label>
            <input id="contact-subject" value={subject} type="text" required onChange={subjectAndErrors} autoComplete="off" />
          </FormElement>
          <FormElementTextArea>
            <label htmlFor="contact-message">Message
              <span>{messageError}</span>
            </label>
            <textarea id="contact-message" value={message} required onChange={messageAndErrors}></textarea>
          </FormElementTextArea>
          <FormElementButton>
            <button onClick={handleSubmit}>
              Submit
              {loading && <Loading spinnerOnly size="2" />}
            </button>
          </FormElementButton>
          {sendFail && <p style={{ color: 'red' }}>{sendFail}</p>}
        </ContactForm>}
        {finishedSend &&
          <p>Your message has been sent.</p>
        }
      </ContactStyled>
    </ContactBackground>
  )
}

export default Contact;