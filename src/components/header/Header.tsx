import React from 'react';

import logo from '../../images/logo.svg';

const Header: React.FC = () => {
  const {
    location: { href: rootLink },
  } = window;

  return (
    <header className="c-header">
      <a className="c-header__link" href={rootLink}>
        <img className="c-header__image" src={logo} alt="Music Love App" />
      </a>
    </header>
  );
};

export default Header;
