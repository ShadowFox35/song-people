import React from 'react';
// import { goodElemType } from '../../type/Objects';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="github">
          <p>©</p>
          <p>2023</p>
          <p>
            <a
              className="github_link"
              target="blank"
              href="https://github.com/ShadowFox35">
              github: ShadowFox35
            </a>
          </p>

          <p>
            <a
              className="linkedIn_link"
              target="blank"
              href="https://linkedin.com/in/anastasia-chernova-dev">
              LinkedIn: Anastasia Chernova
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
