import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="github">
        <a className="github_link" target="blank" href="https://github.com/ShadowFox35">
          github: ShadowFox35
        </a>
      </section>
      <section className="linkedIn">
        <a className="linkedIn_link" target="blank" href="https://linkedin.com/in/anastasia-chernova-dev">
          LinkedIn: Anastasia Chernova
        </a>
      </section>
      <p className="rights">© 2023</p>
    </footer>
  );
};

export default Footer;
