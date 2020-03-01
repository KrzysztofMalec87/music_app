import React from 'react';

const Footer: React.FC = () => {
  const AUTHOR_LINK = 'http://www.krzysztofmalec.com/';

  return (
    <footer className="c-footer">
      App created by Krzysztof Malec
      <a
        className="c-footer__link"
        href={AUTHOR_LINK}
        rel="noopener noreferrer"
        target="_blank"
        title="Krzysztof Malec - Web developer"
      >
        www.krzysztofmalec.com
      </a>
    </footer>
  );
};

export default Footer;
