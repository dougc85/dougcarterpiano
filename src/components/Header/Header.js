import React, { useState, useRef } from 'react';
import { HeaderStyled } from './Header.styled';
import useOutsideClickHandler from '../../hooks/useOutsideAlerter';

function Header() {

  const navItems = [
    'About',
    'Skills',
    'Projects',
    'Contact',
  ]

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const [showNav, setShowNav] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useOutsideClickHandler(menuRef, setDisableButton, setShowNav, showNav)

  function handleMenuClick() {
    if (disableButton) {
      setDisableButton(false);
      return;
    }
    setShowNav(true);
    setDisableButton(true);
  }

  function closeMenu() {
    setDisableButton(false);
    setShowNav(false);
  }
  return (
    <HeaderStyled showNav={showNav}>
      <h1>
        Doug Carter
        <span>
          Web Development
        </span>
      </h1>
      <nav>
        <div ref={buttonRef} onClick={!showNav ? handleMenuClick : null}>
          <div />
          <div />
          <div />
        </div>
        <ul ref={menuRef}>
          {navItems.map((navItem) => {
            return (
              <li key={navItem} onClick={closeMenu}>
                <a href={`#${navItem}`}>{navItem}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export default Header;