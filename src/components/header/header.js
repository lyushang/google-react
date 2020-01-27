import React from 'react';
import './header.css';

const Header = (props) => {
    return (
      <div className="header">
        <ul className="left-header">
          <li className="header-item">
            <a href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">
              About
            </a>
          </li>
          <li className="header-item pl1">
            <a href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US">
              Store
            </a>
          </li>
        </ul>
        <div className="right-header">
          <ul className="header-text">
            <li className="header-item">
              <a href="https://mail.google.com/mail/?tab=wm&ogbl">Gmail</a>
            </li>
            <li className="header-item pl2">
              <a href="https://www.google.com/imghp?hl=en&tab=wi&ogbl">
                Images
              </a>
            </li>
          </ul>
          <div className="header-item">
            <a
              className="header-more"
              href=""
              title="Google apps"
              onClick={props.changed}
            ></a>
          </div>
          <div className="header-item signin">
            <div className="signin-button">
              <a
                className="header-signin"
                href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/"
                target="_top"
              >
                Sign in
              </a>
            </div>
          </div>
          {props.value}
        </div>
      </div>
    );
}

export default Header;