import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className="contacts">
        <a className="contacts_link" target="blank" href="https://github.com/ShadowFox35">
          github: ShadowFox35
        </a>
      </section>
      <section className="contacts">
        <a className="contacts_link" target="blank" href="https://linkedin.com/in/anastasia-chernova-dev">
          LinkedIn: Anastasia Chernova
        </a>
      </section>
      <p className="rights">© 2023</p>
    </footer>
  );
};

export default Footer;
