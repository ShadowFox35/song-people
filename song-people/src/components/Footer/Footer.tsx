import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="github">
          <a
            className="github_link"
            target="blank"
            href="https://github.com/ShadowFox35">
            github: ShadowFox35
          </a>
        </div>
        <div className="linkedIn">
          <a
            className="linkedIn_link"
            target="blank"
            href="https://linkedin.com/in/anastasia-chernova-dev">
            LinkedIn: Anastasia Chernova
          </a>
        </div>
        <div className="rights">
          <p>©</p>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
