import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h3 className="footer__title">Anand</h3>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#works" className="footer__link">
              Works
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="" className="footer__social-icon" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>

            <a href="" className="footer__social-icon" target="_blank">
              <i className="uil uil-dribbble"></i>
            </a>

            <a href="" className="footer__social-icon" target="_blank">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <span className="footer__copy">
          &#169; Anand. All rigths reserved
          </span>
      </div>
    </footer>
  );
};

export default Footer;
