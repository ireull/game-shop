import React from 'react';

import { FaTelegram, FaGithub } from 'react-icons/fa';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer'>
        <div className='footer__links'>
          <a href='https://t.me/ireull' target={'_blank'} rel='noreferrer'>
            <FaTelegram
              className='telegram'
              size={30}
              action='page/'
              target='_blank'
            />
          </a>

          <a
            href='https://github.com/ireull'
            target={'_blank'}
            rel='noreferrer'
          >
            <FaGithub className='github' size={30} />
          </a>
        </div>
        <span>© {new Date().getFullYear()} Copyright Text</span>
      </div>
    </footer>
  );
};
