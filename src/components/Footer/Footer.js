import React from 'react';
import { FOOTER, FOOTER_LINK, FOOTER_WRAPPER, LOGO } from './classNames';
import './Footer.scss';

const Footer = () => (
  <footer className={FOOTER}>
    <div className={FOOTER_WRAPPER}>
      <a className={FOOTER_LINK} href='https://github.com/KrohNic'>
        Kroh Nickolay
      </a>
      2021
      <a className={FOOTER_LINK} href='https://rs.school/js/'>
        <img
          src='https://rs.school/images/rs_school_js.svg'
          alt='rs school logo'
          className={LOGO}
        />
      </a>
    </div>
  </footer>
);

export default Footer;
