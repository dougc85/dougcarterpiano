import React from 'react';
import { AboutStyled, Links } from './About.styled';

function About() {
  return (
    <AboutStyled id="About">

      <img src="/images/profile.jpg" alt="Doug Carter, web developer" />
      <div>
        <h2>About Me</h2>
        <p>
          <span>
            Welcome!  My name is Doug, and I am a full-stack web developer based in Los Angeles.
            I have been building up experience as a developer for the past few years after a two decade run
            as a local jazz pianist.
          </span>
          <span>
            In my development work, I get most excited thinking about how to design applications that
            encourage people to use their many devices less, how to design apps that provide a service and then
            lead users back into the world. To that end, developing great user experiences and designing
            with simplicity in mind are both paramount in my work.
          </span>
          <span>
            Thanks for stopping by! I hope you enjoy having a look around.
          </span>
        </p>
        <Links>
          <a href="https://github.com/dougc85">
            <i className="devicon-github-original colored"></i>
          </a>
          <a href="https://www.linkedin.com/in/dougcarterdeveloper/">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
        </Links>
      </div>
    </AboutStyled>
  )
}

export default About;