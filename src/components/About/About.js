import React from 'react';
import { AboutStyled, Links } from './About.styled';
import { Icon } from "@iconify/react";

function About() {
  return (
    <AboutStyled id="About">

      <img src="/images/profile.jpg" alt="Doug Carter, pianist" />
      <div>
        <h2 className='visually-hidden'>About Doug Carter</h2>
        <p>
          <span>
            Doug Carter’s career as a pianist and composer spans twenty years and numerous genres. 
            Raised by multiple generations of professional musicians, Carter’s artistically rich childhood 
            led him to become a musician himself.
          </span>
          <span>
            Since graduating from California State University, Long Beach in 2008 with his Bachelors in Music 
            and Philosophy, this Southern California native has toured the country 
            with the award-winning family music band, Jazzy Ash and the Leaping Lizards, and the jazz ensembles 
            The Jacob Wendt Quintet, Apropos a'Gogo, and his own Doug Carter Trio.
          </span>
          <span>
            You can find recent recordings he's played on in the section below. He is currently working as
            Arranger on Ashli St. Armant's upcoming production, 'Ordinary Folks', likely to premiere in 2027.
          </span>
          <span>
            When he’s not on tour or in session, Carter is training the next generation of dynamic 
            musicians or serenading his wife, Melissa, and their dog, Dax.
          </span>
        </p>
        <Links>
          <a href="https://www.instagram.com/dougcarterpiano" aria-label="Instagram">
            <Icon
            className="instagram-icon"
              icon="skill-icons:instagram"
              width={40}
              height={40}
            />
          </a>
        </Links>
      </div>
    </AboutStyled>
  )
}

export default About;